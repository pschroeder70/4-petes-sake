import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieTile from "./../components/MovieTile";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 30; // Number of movies to fetch per page

  useEffect(() => {
    const apiKey = "e0624cd3b3620a1cb6ffa08b3bca2eb0";
    const url =
      "https://api.themoviedb.org/3/account/9901303/favorite/movies?language=en-US";
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYyNGNkM2IzNjIwYTFjYjZmZmEwOGIzYmNhMmViMCIsInN1YiI6IjVmZDEyMGUxMmNlYjUzMDA0MmVlMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aBdfzlulpnHHeQ5yi__OgCmcOtrUUCuZL-xET525c0",
      },
    };

    const fetchMovies = async (page) => {
      try {
        const response = await axios.get(`${url}&page=${page}`, options);
        const data = response.data;
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className='movie-list'>
        <div className='movie-list__header'>
          <h1>Movie Collection</h1>
          <p>I am not thrilled with how this displays my collection, I kinda want to build by own database. New project?</p>
          <p>Pages {totalPages}</p>
        </div>
        {movies.map((movie) => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
        {currentPage < totalPages && (
          <div className='load-more'>
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
        <div className='tmdb-legal'>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </div>
      </div>
    </>
  );
};

export default MovieList;
