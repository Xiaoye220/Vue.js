## 去哪儿移动端

### 注意：

运行项目时需要使用端口号 8080，或者去 `vue.config.js` 文件中将 `proxy` 的端口改成自己运行后的端口，否则通过 proxy 访问本地数据会 `404` 访问失败

![screenshot](https://github.com/Xiaoye220/Vue.js/blob/master/travel/screenshot/screenshot.gif)

### 1. 初始化

#### 1.1 设置 viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

- width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- height：和 width 相对应，指定高度。
- initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放。

#### 1.2 reset.css

重置各个浏览器默认设置

#### 1.3 border.css

避免多倍屏 ` 1px` 的边界线实际显示为 ` 2~3px`

#### 1.4 fastclick 库

避免部分移动端 click 事件会延迟 300ms 再执行

安装

```bash
# --save 表示正式项目也要依赖的包
npm install fastclick --save
```

使用

```js
import fastClick from 'fastclick'

fastClick.attach(document.body);
```

#### 1.5 stylus 库

CSS 的预处理框架

安装

```bash
npm install stylus --save
npm install stylus-loader --save
```

#### 1.6 Vue-Awesome-Swiper 库

轮播库

安装指定版本

```bash
npm install vue-awesome-swiper@2.6.7 --save
```

使用

```js
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { options }*/);
```

在模板中添加 swiper

```html
<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>
```

#### 1.7  better-scroll 库

对 iScroll 的封装，实现类似原生的滚动

安装指定版本

```bash
npm install better-scroll --save
```

[使用方法](https://github.com/ustbhuangyi/better-scroll)

首先创建符合要求的 dom 结构，再将 dom 对象初始化一个 `better-scroll` 对象

```js
import BScroll from 'better-scroll'

this.scroll = new BScroll(this.$refs.wrapper);
```



### 2.开发

#### 2.1 CSS

##### 2.1.1 css 样式只对当前 vue 单文件有效

通过添加关键字 `scoped`  实现

```html
<style scoped>
    
</style>
```

设置 `scoped` 以后还想设置子组件的的样式，可以用以下方式，`>>>`

```css
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
```

##### 2.1.2 使用 stylus 写 css 样式

1. 通过声明 `lang="stylus"` 使用 `stylus`

```html
<style lang="stylus" scoped>

</style>
```

2. `stylus` 语法

```html
<style lang="stylus" scoped>
	.header
        height : .86rem
        .header-left
            width : .64rem
            float : left
</style>
```

3. 引用 `.styl` 文件定义的样式

`.styl` 文件定义属性

```css
$bgColor = #00bcd4
```

使用

```html
<style lang="stylus" scoped>
    @import "../../../assets/styles/varibles.styl"
	.header
        background : $bgColor
</style>
```

4. 使用 `.styl` 文件定义的方法

```css
ellipsis()
  overflow: hidden //超出的内容进行隐藏
  white-space: nowrap //内容不换行
  text-overflow: ellipsis //超出内容为省略号
```

使用

```html
<style lang="stylus" scoped>
    @import "../../../assets/styles/varibles.styl"
	.header
        background : $bgColor
        ellipsis()
</style>
```

##### 2.1.3 flex 布局

类似 iOS 开发中的自动布局，通过属性声明一些约束，会自动布局

```css
display: flex
```

##### 2.1.4 单行垂直居中

使用 `line-height` 设置高度实现单行垂直居中

```css
line-height: .86rem
```

##### 2.1.5 设置 img 宽高比

`padding-bottom` 如果用%来表示的话，计算是根据父元素的 width 的值进行计算的

使用`padding-bottom` 设置高度基于宽度的自适应，以下代码表示 高度为宽度的 31.5%

```css
width : 100%
height : 0
padding-bottom: 31.5%
```



#### 2.2 路径

css 引用其他 css 文件需要使用 `~@` 便是 src 目录

##### 2.2.1 src 与 @ 

@vue/cli 3 中 `@` 符号表示` src` 目录，因此可以使用以下方式表示路径

```js
import HomeHeader from '@/components/home/Header'
```

但是，虽然  `@` 符号表示` src` 目录，以下写法确实有问题的。因为写成 `@` 在打包时可以通过该符号确认是 `src `路径从而找到路径下的东西，但是使用以下这种相对路径的写法却会在打包时解析不出路径。

```js
// 错误
import HomeHeader from 'src/components/home/Header'
```

##### 2.2.2 自定义别名

在 `vue.config.js` 文件修改配置，修改配置后需要**重启服务器**

```js
module.exports = {
    // 设置 webpack
    chainWebpack: config => {
        // 设置别名
        config.resolve.alias
            .set('@styles', '@/assets/styles')
    }
};
```

或者这个方式

```js
let path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 设置 webpack
    chainWebpack: config => {
        // 设置别名
        config.resolve.alias
            .set('@styles', resolve('src/assets/styles'))
    }
};
```



使用

```js
// 表示的实际路径为 src/assets/styles/reset.css
import '@styles/reset.css'
```

##### 2.2.3 data 中使用本地 image 的 url

上面那种写法会有问题，因为放在模版里是会被 `webpack` 打包出来。而在 `js` 里写图片路径其实只是字符串 `webpack` 不会处理。需要使用 `import`、 `require` 引入

```js
data() {
    return {
        //url: "../../../assets/logo.png"     
        url: require("../../../assets/logo.png")
    }
}
```

#### 2.3 获取本地模拟数据

@vue/cli 3.0 静态数据放在 public 文件夹下

要访问 public 目录下的文件 index.json

可以直接访问  `localhost:8080/index.json`

```js
// 请求 public 目录下的 mock/index.json 文件
axios.get('/mock/index.json')
```

#### 2.4 代理 proxy

在  `vue.config.js` 中添加如下代码，实现的功能就是

* 如一个接口请求 `axios.get('/api/index.json')`，那么通过重定向后实际请求的地址为 `axios.get('http://localhost:8080/mock/index.json')`
* `target` 表示代理的目标地址
* `changeOrigin` 表示是否支持重定向
* `pathRewrite` 重写路径

```js
module.exports = {
    // ........
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : '/mock'
                }
            }
        }
    }
};
```

#### 2.5 函数节流

让一个频繁执行的操作放入一个 `setTimeout` 中，规定一个时间间隔，两次操作间隔在规定以内的操作都会忽略，在规定之外的操作才能执行，以下代码表示两次执行的时间间隔必须大于` 16ms`

```js
if(this.timer) {
    clearTimeout(this.timer)
}
this.timer = setTimeout(() => {
    // todo 
}, 16); 
```

#### 2.6 路由

##### 方式一

通过 `router-link` 进行跳转

```html
<router-link to="/helloworld">
	<div>
        // ....
    </div>
</router-link>
```

默认的  `router-link`  是一个 `a` 标签，可以通过以下方式转换成其他标签

```html
<router-link tag="li" to="/helloworld">
	// ... 
</router-link>
```



##### 方式二

在 Vue 对象内部可以使用代码方式路由

```js
this.$router.push('/helloworld');
```

#### 2.7 Vuex

[Vuex](https://vuex.vuejs.org/)

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
