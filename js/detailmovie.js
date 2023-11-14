let apikey = "c5954851f3946cd861a8968314472164"
let contenedordetail = document.querySelector(".detailpelicula")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)

fetch(`https://api.themoviedb.org/3/movie?api_key=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < data.results.length; i++){
            contenedordetail.innerHTML += `
            <article>
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" height="300px" width="200px" />
            <h1>
            ${data.results[i].title}
            </h1>
            <h2>
            ${data.results[i].average}
            </h2>
            <h3>
            ${data.results[i].date}
            </h3>
            <h4>
            ${data.results[i].overview}
            </h4>
            </article>
            `
        }
    })
    .catch(function(error){
        console.log('El error es:' + error);
    })

