<script>

    import StarRating from 'vue-star-rating'

    export default{
        name: 'CardSeriesApp',
        props: ['apiUrlSeries', 'seriesTitle', 'seriesOriginalTitle', 'seriesOverview', 'seriesVoteAverage', 'seriesImgApi', 'seriesBackdropPath', 'seriesPosterPath',],
        components:{
            StarRating
        },
        methods:{
            getStars(){
                return (Math.ceil(this.seriesVoteAverage / 2))
            }
    },
    }
</script>

<template>

<div class="col-2 position-relative">
        <img 
        :src="seriesImgApi + 'w300' + seriesPosterPath" 
        alt="">
        <div>
          <p><span class="fw-bold">Titolo: </span>{{ seriesTitle }}</p>
          <p><span class="fw-bold">Titolo orginale:</span> {{ seriesOriginalTitle }}</p>
        <p>
            <span class="fw-bold">Vote: </span>
            <star-rating 
            :star-size="15"
            :glow="2"
            :padding="1"
            :read-only="true"
            :rating="getStars()"/>
        </p>
          <p><span class="fw-bold">Overview:</span> {{ seriesOverview }}</p>
        </div>
    </div>

</template>

<style>

</style>