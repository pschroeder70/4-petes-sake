import React from "react";

function MovieTile({ movie }) {
  return (
    <>
      <div className='movie-tile'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='movie-card__image'
        />
        <div className='movie-tile__copy'>
          <p className='movie-tile__copy-title'>{movie.title}</p>
          <p className='movie-tile__copy-release'>
            Release Date : {movie.release_date}
          </p>
          <div className='movie-tile__copy-overview'>{movie.overview}</div>
        </div>
      </div>
    </>
  );
}

export default MovieTile;
