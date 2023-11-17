let apikey = "c5954851f3946cd861a8968314472164"
let a = ""
let contenedor = document.querySelector(".search")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get('q')


fetch(`https://api.themoviedb.org/3/search/multi?query=${busqueda}&api_key=${apikey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        if (data.results.length === 0){
            contenedor.innerHTML = "NO HAY RESULTADO PARA SU BUSQUEDA" 
        } else{
            contenedor.textContent = `Resultados de búsqueda para: ${a}`;
            for(let i = 0; i < 3; i++){
                contenedor.innerHTML += `
                <a href="./detail-movie.html?id=${data.results[i].id}">
                <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" height="300px" width="200px">
                </a>
                <h1>
                ${data.results[i].overview}
                </h1>
                `
            }
        }
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })