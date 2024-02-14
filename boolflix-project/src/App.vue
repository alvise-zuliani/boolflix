<script>
import {store} from './js/store'
import axios from 'axios'
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'

export default{
  components:{
    HeaderApp,
    MainApp
  },
  data(){
    return{
      store
    }
  }, 
  methods:{
    
  }
}

</script>

<template>

  <div>
    <HeaderApp/>
    <MainApp/>
  </div>

</template>

<style lang="scss">

@use './styles.scss'

</style>
