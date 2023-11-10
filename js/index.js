let apikey = "c5954851f3946cd861a8968314472164"
let contenedorpopulares = document.querySelector(".peliculaspopulares")
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < data.results.length; i++) {
            contenedorpopulares.innerHTML += `
            <article>
            <a href="./detail-movie.html">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" height="300px" width="200px" />
            <h1>
            ${data.results[i].title}
            </h1>
            </a>
            <h2>
            ${data.results[i].release_date}
            </h2>
            <a href="./favorite.html">
            <h3>Agregar a favoritos</h3>
            </a>
        </article>`
        }
    })
    .catch(function(error){
        console.log('El error es:' + error);
    })
    
