import React from 'react'
import "./App.css";

function Result({result ,openDetail}) {
  return (

    <div className='result 'onClick={e=>openDetail (result.imdbID)}>
      <div className=" border border-dark border-4 ">
        <img src={result.Poster} alt=""></img>
      </div>

      <div className='bg-dark text-white p-2'>
        <h5>{result.Title}</h5>
        <p>{result.Year}</p>
      </div>
      </div>
  );
}

export default Result