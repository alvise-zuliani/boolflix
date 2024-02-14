import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    imgApi: "https://image.tmdb.org/t/p/",
    apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=d65b05e5eee9ca65be2f6d9b620582b7&query=",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=d65b05e5eee9ca65be2f6d9b620582b7&query="
})

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjViMDVlNWVlZTljYTY1YmUyZjZkOWI2MjA1ODJiNyIsInN1YiI6IjY1Y2I3N2RiODliNTYxMDE4NDY5NmE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iAvX_cd0M4MeWf5mGAongdQ1eDwwquwVe5eULxJurwk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

