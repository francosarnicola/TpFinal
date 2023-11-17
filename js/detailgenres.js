let apikey = "c5954851f3946cd861a8968314472164"
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id");
let n = queryStringObj.get("name")
let o = document.querySelector(".Detallegenerospelis")
let q = document.querySelector(".Detallegenerosseries")
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for(let i = 0; i < 3; i++){
            o.innerHTML +=`
            <article>
            <a href="detail-movie.html?id=${data.results[i].id}">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}" height="300px" width="200px" />
            <h1>
            ${data.results[i].title}
            </h1>
            </a>
            <h2>
            ${data.results[i].release_date}
            </h2>
            </article>
            `
        }
       
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })

    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_genres=${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for(let i = 0; i < 3; i++){
            q.innerHTML +=`
            <article>
            <a href="detail-movie.html?id=${data.results[i].id}">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}" height="300px" width="200px" />
            <h1>
            ${data.results[i].original_name}
            </h1>
            </a>
            <h2>
            ${data.results[i].first_air_date}
            </h2>
            </article>
            `
        }
       
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })