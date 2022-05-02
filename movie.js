class Movie {
    constructor(name, description, year, addingDate, rating, image){
        this.name = name;
        this.description = description;
        this.year = year;
        this.addingDate = addingDate;
        this.rating = rating;
        this.image = image;
    }

    renderMovie() {
        let nowDate = new Date;
        let movieAddingDate = new Date(this.addingDate);
        let timeDifferenceText = timeDifference(nowDate, movieAddingDate);
        
        document.querySelector('#movie-list').innerHTML += `
        <li>
                <h3>${this.name} (${this.year})</h3>
                <p class='rating'>Rating: ${this.rating}</p>
                <div class='photo'><img src = ${this.image} style = 'width:100%'></div>
                <p class='description'>${this.description}</p>
                <p class='date' >Added: ${this.addingDate}</p>
                <p class='date'>${timeDifferenceText}</p>
                <button onclick="deleteMovie('${this.name}')">Delete</button>
        </li>
        `
    }
}

function deleteMovie(name){
    const found = APP.movies.findIndex(element => element.name === name);
    APP.movies.splice(found,1);
    APP.renderMovieList(APP.movies);
    APP.addToStorage(APP.movies);
}

function timeDifference(date1, date2){
    let diffTime = Math.abs(date1 -date2);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        let txt = '';
         if(diffTime/(1000*60*60*24)<1){
            txt = `today`;
        } else if (diffTime/(1000*60*60*24)<7){
            txt = `${Math.floor(diffTime/(1000*60*60*24))} days ago`;
        } else {
            txt = `${Math.floor(diffTime/(1000*60*60*24*7))} weeks ago`;
        }
        return txt;
}