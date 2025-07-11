import React from 'react'

function Detail({selected ,close}) {
  return (
    <div className=" selectedimage d-flex justify-content-center align-items-center">
      <div className="container mt-5" >
        <div className="row">
          <div className=" resultimage col-12 col-md-6 text-center ">
            <img src={selected.Poster} alt="movie image"></img>
          </div>
          <div className="col-12 col-md-6 text-white">
            <h2>{selected.Title}</h2>
            <p> Year: {selected.Year}</p>
            <p>Actors Name: {selected.Actors}</p>
            <p>Rating: {selected.imdbRating}</p>
            <p>{selected.Plot}</p>
            <button onClick={close} className='btn btn-danger'>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail