let apikey = "c5954851f3946cd861a8968314472164"
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id");
let n = queryString.getObj("name")
let o = document.querySelector(".Detallegeneros")
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${id}`)
    .then(function(response){
        return response.json
    })
    .then(function(data){
        console.log(data)
        o.innerHTML +=`
        <h1>("name)</h1>
        
        `
    })
    .catch(function(error){
        console.log("El error es: " + error)
    })