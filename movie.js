var main = document.querySelectorAll('.main .center')[0];

fetch("https://api.themoviedb.org/3/discover/movie?api_key=7c5bc6b618b4dec99477c43314413c2d&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1")
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{
        if(j > 10)
            return;
        if(j > 0){
            main.innerHTML+='<div class="banner-principal" style="background-image:url=https://image.tmdb.org/t/p/'+i.popularity+'"></div>';
        }else{
            if(j == 1){

            }
        }
    })
})
    
