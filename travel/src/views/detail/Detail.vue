<template>
    <div>
        <detail-banner :sight-name="sightName" :banner-img="bannerImg" :gallary-imgs="gallaryImgs"></detail-banner>
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from '@/components/detail/Banner'
    import DetailHeader from '@/components/detail/Header'
    import DetailList from '@/components/detail/List'
    import axios from 'axios'

    export default {
        name: "Detail",
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                categoryList: []
            }
        },
        methods: {
            getDetailInfo() {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                    .then(res => {
                        const resData = res.data;
                        const data = resData.data;
                        if(resData.ret && data) {
                            this.sightName = data.sightName;
                            this.bannerImg = data.bannerImg;
                            this.gallaryImgs = data.gallaryImgs;
                            this.categoryList = data.categoryList;
                        }
                    })
            }
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        mounted() {
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
