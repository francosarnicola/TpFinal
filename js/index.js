let apikey = "c5954851f3946cd861a8968314472164"
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log('El error es:' + error);
    })
    
