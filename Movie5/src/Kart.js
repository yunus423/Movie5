import React from 'react';


const Kart = (movie) => {

  let img_path="https://image.tmdb.org/t/p/w500";



  return (
    <>
     <div className="movie">
                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                       
                    </div>
                    <div className="overview">
                        <h1>İçerik</h1>
                        {movie.info.overview}
                    </div>
                    <div className="search-btn">
                  
                    <input type="text"  placeholder="Yorum ekle" 
                   
                    className="input" onChange={(e)=>(e.target.value)}></input>
                     
                
                    </div>
            
              
                   
                </div>
            </div>
  


           </>
  )
}
export default Kart