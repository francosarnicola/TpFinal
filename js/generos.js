let apikey = "c5954851f3946cd861a8968314472164"
let generospeliculas = document.querySelector(".contenedorpeliculas")
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < data.results.length; i++) {
            contenedorpopulares.innerHTML += `
            `
        }
    })     
    .catch(function(error){
        console.log('El error es:' + error);
    })