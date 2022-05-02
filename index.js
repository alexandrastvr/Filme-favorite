window.APP = {};
window.mainPage = document.querySelector('#root');

APP.movies = [
    {
       name: `Jojo rabbit`,
       description:`A young German boy in the Hitler Youth whose hero and imaginary friend is the country's dictator is shocked to discover that his mother is hiding a Jewish girl in their home.`,
       year:2019,
       addingDate: '11/21/2021',
       rating: 7.9,
       image: 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg'
    },
    {
        name: `Eternal sunshine of the spotless mind`,
        description:`When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.`,
        year:2004,
        addingDate: '11/20/2020',
        rating: 8.3,
        image: 'https://m.media-amazon.com/images/I/71G7AybM3qL._SY679_.jpg'
     },
     {
        name: `Perfetti sconosciuti`,
        description:`Seven long-time friends meet for dinner. They decide to share their text messages, emails and phone calls. Secrets are unveiled. Harmony trembles.`,
        year:2016,
        addingDate: '12/02/2021',
        rating: 7.8,
        image: 'https://m.media-amazon.com/images/M/MV5BNDQzZmQ5MjItYmJlNy00MGI2LWExMDQtMjBiNjNmMzc5NTk1XkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_.jpg'
     }
];

let array = [];
let stringArray = JSON.stringify(array);
localStorage.setItem("array", stringArray);
let returnedArray = JSON.parse(localStorage.getItem("array"));

APP.addToStorage = (array)=>{
   APP.stringMovieList = JSON.stringify(array);
   localStorage.setItem("movies", APP.stringMovieList);
}

function storeMovies(){
   if (localStorage.getItem("movies")==null){
      APP.stringMovieList = JSON.stringify(APP.movies);
      localStorage.setItem("movies", APP.stringMovieList);
   }
   APP.returnedMovies = JSON.parse(localStorage.getItem("movies"));
   APP.movies = APP.returnedMovies;
}



function startRendering(){
   storeMovies();
   APP.renderMovieList(APP.movies);
}

window.addEventListener('load', startRendering);