<script>
import { store } from '../js/store'
import CardSeriesApp from './CardSeriesApp.vue';
import CardMoviesApp from './CardMoviesApp.vue';

export default{
    name: 'MainApp',
    data() {
        return {
            store,
            apiUrlMovies: String,
            movieTitle: String,
            movieOriginalTitle: String,
            movieOverview: String,
            movieImgApi: String,
            movieVoteAverage: Number,
            moviePosterPath: String,
        };
    },
    components: { CardSeriesApp, CardMoviesApp }
}

</script>

<template>

  <div class="container-fluid">
    
      <div class="row">
        <h2>Movies</h2>
        <CardMoviesApp
        v-for="(movie, index) in store.movies"
        :key="index"
        :apiUrlMovies="store.apiUrlMovies"  
        :movieTitle="movie.title" 
        :movieOriginalTitle="movie.original_title"
        :movieOverview="movie.overview"
        :movieVoteAverage="movie.vote_average"
        :movieImgApi="store.imgApi"
        :movieBackdropPath="movie.backdrop_path"
        :moviePosterPath="movie.poster_path"/>
      </div>

      <div class="row">
        <h2>Series</h2>
        <CardSeriesApp
        v-for="(series, index) in store.series"
        :key="index"
        :apiUrlSeries="store.apiUrlSeries"  
        :seriesTitle="series.name" 
        :seriesOriginalTitle="series.original_name"
        :seriesOverview="series.overview"
        :seriesVoteAverage="series.vote_average"
        :seriesImgApi="store.imgApi"
        :seriesBackdropPath="series.backdrop_path"
        :seriesPosterPath="series.poster_path"/>
      </div>
    
  </div>

</template>
  
<style lang="scss" scoped>

</style>
