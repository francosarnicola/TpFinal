let apikey = "c5954851f3946cd861a8968314472164"
let contenedordetail = document.querySelector(".detailserie")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id");

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
            contenedordetail.innerHTML += `
            <article>
            <a href="./detail-serie.html?id=${data.id}">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" height="300px" width="200px" />
            <h1>
            ${data.original_name}
            </h1>
            <h2>
            ${data.vote_average}
            </h2>
            <h3>
            ${data.first_air_date}
            </h3>
            <h4>
            ${data.overview}
            </h4>
            <h5>
            ${data.genres}
            </h5>
            </article>
            `
    })
    .catch(function(error){
        console.log('El error es:' + error);
    })