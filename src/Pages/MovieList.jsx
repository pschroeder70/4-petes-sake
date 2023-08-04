import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "e0624cd3b3620a1cb6ffa08b3bca2eb0";
    const url =
      "https://api.themoviedb.org/3/account/9901303/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";

    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYyNGNkM2IzNjIwYTFjYjZmZmEwOGIzYmNhMmViMCIsInN1YiI6IjVmZDEyMGUxMmNlYjUzMDA0MmVlMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aBdfzlulpnHHeQ5yi__OgCmcOtrUUCuZL-xET525c0",
      },
    };

    axios
      .get(url, options)
      .then((response) => {
        const data = response.data;
        // Sort movies alphabetically by title
        data.results.sort((a, b) => a.title.localeCompare(b.title));
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
