import React from "react";

function MovieInfo({ movie, onDelete, showDelete = true }) {
  return (
    <div className="movie">
      <h1 className="movie__title">{movie.Title}</h1>
      <div className="movie__poster">
        {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
      </div>
      <div className="movie__info">
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Plot: {movie.Plot}</p>
      </div>

      {showDelete && <button onClick={() => onDelete(movie)}>Delete</button>}
    </div>
  );
}

export default MovieInfo;
