import React from "react";

function MovieInfo({ movie, onDelete, showDelete = true, showPopup = false }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        {movie.poster && <img src={movie.poster} alt={movie.title} />}
      </div>
      <div className="movie__title">{movie.title}</div>
      <div className="movie__info">
        <p>
          <b>Year:</b> {movie.year} <b>Rated:</b> {movie.rated}
        </p>
        {/* Hover popup content */}
        {showPopup && (
          <div className="movie__popup">
            <div className="movie__title">{movie.title}</div>
            <p>
              <b>Genre:</b> {movie.genre}
            </p>
            <p>{movie.plot}</p>
          </div>
        )}
      </div>

      {showDelete && <button onClick={() => onDelete(movie)}>Delete</button>}
    </div>
  );
}

export default MovieInfo;
