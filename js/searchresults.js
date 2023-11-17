let apikey = "c5954851f3946cd861a8968314472164"
let a = ""
let contenedor = document.querySelector(".search")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let b = queryStringObj.get("Buscador");
let buscador = document.querySelector("busqueda")

fetch(`https://api.themoviedb.org/3/search/multiapi_key=${apikey}`)
    .then(function(response){
        return response.json
    })
    .then(function(data){
        console.log(data)
        if (data.results.length === 0){
            buscador.innerHTML = "no hay resultado para su búsqueda"
        } else{
            contenedor.textContent = `Resultados de búsqueda para: ${a}`;
            for(let i = 0; i < 5; i++){
                buscador.innerHTML += `
                <a href="./detail-movie.html?id=${data.results[i].id}">
                <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}
                </a>
                `
            }
        }
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })