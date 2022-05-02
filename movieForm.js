window.mainPage.innerHTML += `
<div id = 'footer'>
    <h2>Add another movie!</h2>
    <form id='movie-form'>
        <label>Name: </label>
        <input class='inp' type="text" name = "movieName">
        <label>Year: </label>
        <input class='inp' type="number" name = "movieYear">
        <label>Rating: </label>
        <input class='inp' type="number" step="0.01" name = "movieRating">
        <label>Description: </label>
        <textarea class='inp' name = "movieDescription"></textarea>
        <label>Image: </label>
        <input class='inp' type="text" name = "movieImage">
        <div id="btn"><input id = "btnSubmit" type="submit"></div>
    </form>
</div>
`
const movieForm = document.querySelector('#movie-form');
movieForm.onsubmit = function(event){
    event.preventDefault();
    const movieName = event.target.movieName.value;
    const movieYear = Number(event.target.movieYear.value);
    const movieRating = Number(event.target.movieRating.value);
    const movieDescription = event.target.movieDescription.value;
    const movieImage = event.target.movieImage.value;
    const newDate = new Date;
    const movieAddingDate = (newDate.getMonth() + 1) + '/' +  newDate.getDate() + '/' + newDate.getFullYear();
    
    const newMovie = {
        name: movieName,
        description:movieDescription,
        year: movieYear,
        addingDate: movieAddingDate,
        rating: movieRating,
        image: movieImage
    }

    APP.movies.push(newMovie);
    APP.renderMovieList(APP.movies);
    APP.addToStorage(APP.movies);
   
}
