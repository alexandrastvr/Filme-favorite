document.querySelector('#header').innerHTML += `
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle sort" data-bs-toggle="dropdown" aria-expanded="false">
    Sort movies by...
  </button>
  <ul class="dropdown-menu list">
    <li><button id = 'sort-year-btn' class="dropdown-item">Year</button></li>
    <li><button id = 'sort-rating-btn' class="dropdown-item">Rating</button></li>
    <li><button id = 'sort-adding-date-btn' class="dropdown-item">Date added</button></li>
  </ul>
</div>
`;


function sortMovies(type){
    switch(type){
        case 'year':
            APP.movies.sort(compareYear);
            APP.renderMovieList(APP.movies);
            break;

        case 'rating':
            APP.movies.sort(compareRating);
            APP.renderMovieList(APP.movies);
            break;

        case 'addingDate':
            APP.movies.sort(compareAddingDate);
            APP.renderMovieList(APP.movies);
            break;
    }
}

function compareYear(a, b) {
    return a.year - b.year;
}
function compareRating(a, b) {
    return b.rating - a.rating;
}
function compareAddingDate(a, b){
    let aa = a.addingDate.split('/').reverse().join(),
        bb = b.addingDate.split('/').reverse().join();
    return bb < aa ? -1 : (aa > bb ? 1 : 0);
}

function sort(){
    const sortByYearBtn = document.querySelector('#sort-year-btn');
    const sortByRatingBtn = document.querySelector('#sort-rating-btn');
    const sortByAddingDateBtn = document.querySelector('#sort-adding-date-btn');
    sortByYearBtn.addEventListener('click', function () {sortMovies('year')});
    sortByRatingBtn.addEventListener('click', function () {sortMovies('rating')});
    sortByAddingDateBtn.addEventListener('click', function () {sortMovies('addingDate')});
}

window.addEventListener('load', sort);