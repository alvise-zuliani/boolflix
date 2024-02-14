<script>
import axios from 'axios';
import { store } from '../js/store'

export default{
  name: 'HeaderApp',
  data(){
    return{
      store
    }
  },

  methods:{
    getData(){
        axios.get(store.apiUrlMovies + `${store.searchText}`).then( ( res ) => {
          console.log(res.data.results)
          store.movies = res.data.results 
          console.log(store.movies)
        })
        axios.get(store.apiUrlSeries + `${store.searchText}`).then( ( res ) => {
          console.log(res.data.results)
          store.series = res.data.results 
          console.log(store.series)
        })
      }
    }
  }

  
</script>

<template>

  <header class="container-fluid d-flex justify-content-between">
    <figure class="d-flex gap-3">
      <img src="https://media.discordapp.net/attachments/741319618349629503/1206969161415397436/logo.png?ex=65ddf0a0&is=65cb7ba0&hm=c66cde4396e85702ff734805e64d5670c9d40d03c99c65bbdd2bf64b124ab48a&=&format=webp&quality=lossless&width=732&height=203" alt="Netflix">
      <nav class="d-flex gap-2">
        <li>Home</li>
        <li>Tv Series</li>
        <li>Film</li>
        <li>Originali</li>
        <li>Aggiunti di recente</li>
        <li>La mia lista</li>
      </nav>
    </figure>
    <div class="d-flex align-items-center">
      <input 
      v-model="store.searchText"
      class="form-control"
      type="text"
      @keyup.enter="getData">
      <input 
      type="button" 
      class="btn btn-primary"
      value="Search"
      @click="getData">
    </div>
  </header>

</template>
  
<style lang="scss" scoped>

header{
  background-color: black;
  padding-block: 15px;
  figure{
    width: 50%;
    img{
      width: 200px;    
    }
  }
}

</style>
