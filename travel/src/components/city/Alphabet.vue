<template>
    <div>
        <ul class="list">
            <li class="item"
                v-for="(item, key) in letters"
                :key="key"
                :ref="item"
                @click="click"
                @touchstart.prevent="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        data() {
            return {
                isTouching: false,
                timer: null
            }
        },
        computed: {
            letters () {
                const letter = [];
                for(let i in this.cities) {
                    letter.push(i)
                }
                return letter
            }
        },
        methods: {
            click(e) {
                this.$emit("change", e.target.innerText)
            },
            touchStart() {
                this.isTouching = true
            },
            touchMove(e) {
                if(this.isTouching) {
                    if(this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const offsetY = this.$refs.A[0].offsetTop;
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - offsetY)/20);
                        if(index >=0 && index < this.letters.length) {
                            this.$emit("change", this.letters[index]);
                        }
                    }, 16);
                 }
            },
            touchEnd() {
                this.isTouching = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.56rem
        bottom 0
        right 0
        width .5rem
        .item
            text-align center
            color $bgColor
            line-height .4rem
</style>
