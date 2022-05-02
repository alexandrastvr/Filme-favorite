window.mainPage.innerHTML += `
<div id = "content">
    <h2>Favourite movies</h2>
    <ul id = 'movie-list'></ul>
</div>
`

APP.renderMovieList = (movieArray) => {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = ` `;
    movieArray.forEach(element => {
        const newMovie = new Movie(element.name, element.description, element.year, element.addingDate, element.rating, element.image);
        newMovie.renderMovie();
    });

}