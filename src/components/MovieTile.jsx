import React, { useRef } from "react";

function MovieTile({ movie }) {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <div className='movie-tile'>
        <button onClick={openDialog} className='button--clear'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-tile__image'
          />
        </button>
        <dialog ref={dialogRef} className="modal">
          <div className="movie-tile__modal">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-tile__image'
          />
          <div className='movie-tile__copy'>
            <p className='movie-tile__copy-title'>{movie.title}</p>
            <p className='movie-tile__copy-release'>
              Release Date : {movie.release_date}
            </p>
            <div className='movie-tile__copy-overview'>{movie.overview}</div>
            <button onClick={closeDialog}>Close</button>
          </div>

          </div>
        </dialog>
      </div>
    </>
  );
}

export default MovieTile;
