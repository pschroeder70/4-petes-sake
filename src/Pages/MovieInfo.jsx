import React from "react";

function MovieInfo({ movie, onDelete, showDelete = true, showPopup = false }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
      </div>
      <div className="movie__title">{movie.Title}</div>
      <div className="movie__info">
        <p>
          <b>Year:</b> {movie.Year} <b>Rated:</b> {movie.Rated}
        </p>
        {/* Hover popup content */}
        {showPopup && (
          <div className="movie__popup">
            <div className="movie__title">{movie.Title}</div>
            <p>
              <b>Genre:</b> {movie.Genre}
            </p>
            <p>{movie.Plot}</p>
          </div>
        )}
      </div>

      {showDelete && <button onClick={() => onDelete(movie)}>Delete</button>}
    </div>
  );
}

export default MovieInfo;
