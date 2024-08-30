import React, { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo";

function MovieList() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    // Load movies from localStorage when the component mounts
    const savedMoviesJson = localStorage.getItem("movies");
    try {
      if (savedMoviesJson) {
        const savedMovies = JSON.parse(savedMoviesJson);

        // Filter out invalid movies
        const validMovies = savedMovies.filter(
          (movie) =>
            movie &&
            movie.Response === "True" &&
            movie.Title &&
            movie.Year &&
            movie.Rated &&
            movie.Poster !== "N/A"
        );

        setSavedMovies(validMovies);
      }
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }, []);

  return (
    <div>
      <h1>Movie Collection</h1>
      <div className="movies">
        {savedMovies.length > 0 ? (
          savedMovies.map((movie, index) => (
            <MovieInfo key={index} movie={movie} showDelete={false} showPopup={true} />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
