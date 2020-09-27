var main = document.querySelectorAll(".main .center")[0];

fetch("https://api.themoviedb.org/3/movie/550?api_key=7c5bc6b618b4dec99477c43314413c2d"){
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
    })
    
}