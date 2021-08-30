fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
    .then(res => res.json())
    .then(data => setMovies(data.results))


const setMovies = (movie) => {
    const movieContainer = document.getElementById('movie-container')
    // console.log(movie);
    for (const movies of movie) {
        // console.log(movies);
        const movieBox = document.createElement('div');
        movieBox.classList.add('col-md-3')
        const imgUrl = "https://image.tmdb.org/t/p/original" + movies.poster_path;
        // console.log(imgUrl);
        movieBox.innerHTML = `
           <div class="shadow rounded p-3 m-2">
           <img class="img-fluid" src=${imgUrl}>
            <h3>${movies.title}</h3>
            <p>${movies.overview.slice(0, 150)}</p>
            <button onclick="setMovieDetails('${movies.id}')" class='btn btn-primary'>See btn-primary</button>
           </div> 
        `;
        movieContainer.appendChild(movieBox);
    }
}

const setMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMoviedetails(data))
}

const setMoviedetails = (movie) => {
    const movieDetials = document.getElementById('movie-details')
    movieDetials.innerHTML = ''
    const movieBox = document.createElement('div')
    movieBox.innerHTML = `
    <h3>${movie.original_title}</h3>
    
    `
    movieDetials.appendChild(movieBox)
}