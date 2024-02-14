<script>

import StarRating from 'vue-star-rating'

export default{
    name: 'CardMoviesApp',
    props: [
        'apiUrlMovies', 'movieTitle', 'movieOriginalTitle', 'movieOverview', 'movieVoteAverage', 'movieImgApi', 'movieBackdropPath', 'moviePosterPath',
    ],
    components:{
        StarRating
    },
    methods:{
        getStars(){
            return (Math.ceil(this.movieVoteAverage / 2))
        }
    },
}

</script>

<template>
    
    <div class="col-2 position-relative">
        <img 
        :src="movieImgApi + 'w300' + moviePosterPath" 
        alt="">
        <div>
          <p><span class="fw-bold">Titolo: </span>{{ movieTitle }}</p>
          <p><span class="fw-bold">Titolo orginale:</span> {{ movieOriginalTitle }}</p>
        <p>
            <span class="fw-bold">Vote:</span>
            <star-rating 
            :star-size="15"
            :glow="2"
            :padding="1"
            :read-only="true"
            :rating="getStars()"/>
        </p>
          <p><span class="fw-bold">Overview:</span> {{ movieOverview }}</p>
        </div>
    </div>

</template>

<style scoped>

</style>