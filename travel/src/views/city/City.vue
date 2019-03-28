<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot-cities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from '@/components/city/Header'
    import CitySearch from '@/components/city/Search'
    import CityList from '@/components/city/List'
    import CityAlphabet from '@/components/city/Alphabet'

    export default {
        name: "City",
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ""
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json')
                    .then(res => {
                        const resData = res.data;
                        const data = resData.data;
                        if(resData.ret && data) {
                            this.hotCities = data.hotCities;
                            this.cities = data.cities;
                        }
                    })
            },
            handleLetterChange(letter) {
                this.letter = letter;
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>
