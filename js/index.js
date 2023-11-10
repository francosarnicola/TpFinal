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
                <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"/>
                <h2>${data.results[i].name}</h2>
            </article>`
        }
    })
    .catch(function(error){
        console.log('El error es:' + error);
    })
    
