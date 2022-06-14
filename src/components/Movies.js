import React from "react";
import { movies } from "../data";
function Movies() {
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movies)=> 
      <div key={movies.title} >
        <div>{`Title:${movies.title}`}</div>
        <div>{`Runtime:${movies.time} minutes`}</div>
        <ul>
          {movies.genres.map((value,index)=><li key={index}>{value}</li>)}
        </ul>
        
        
      </div>)
      }


    </div>
  )
  
  
}

export default Movies;
