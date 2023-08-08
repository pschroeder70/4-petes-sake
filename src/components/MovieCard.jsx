import React from "react";

function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <div className='movie-card__top'>
        <div className='movie-card__top-data'>
          <p className='movie-card__title'>{movie.title}</p>
        </div>
        <div className='movie-card__top-image'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-card__image'
          />
        </div>
      </div>
      <div className='movie-card__bottom'>
        <p className='movie-card__release'>
          Release Date : {movie.release_date}
        </p>
      </div>
      {/* <div className='movie-card__overview'{">"}{movie.overview}</div> */}
    </div>
  );
}

export default MovieCard;
