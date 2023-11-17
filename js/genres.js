let apikey = "c5954851f3946cd861a8968314472164"
let generospeliculas = document.querySelector(".contenedorpeliculas .navgeneropelis");
let generoseries = document.querySelector(".contenedorseries .navgeneroseries")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id");

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i < data.genres.length; i++) {
            generospeliculas.innerHTML += `
            <li class="itemgenero">
            <a href="./detail-genres.html?id=${data.genres[i].id}name=${data.genres[i].name}">${data.genres[i].name}</a>
            </li>
            `
            
        }
    })     
    .catch(function(error){
        console.log('El error es:' + error);
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i < data.genres.length; i++) {
            generoseries.innerHTML += `
            <li class="itemgenero">
            <a href="./detail-genres.html?id=${data.genres[i].id}"name=${data.genres[i].name}">${data.genres[i].name}</a>
            </li>
            `
            
        }
    })     
    .catch(function(error){
        console.log('El error es:' + error);
    })