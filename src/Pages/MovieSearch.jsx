import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import MovieInfo from "./MovieInfo";

function MovieSearch() {
  const [movieData, setMovieData] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

  const apiKey = "869c0d7a"; // Replace with your OMDb API key

  const fetchMovieData = (title) => {
    const formattedTitle = title.split(" ").join("+");
    fetch(
      `http://www.omdbapi.com/?t=${encodeURIComponent(
        formattedTitle
      )}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovieData(data);
          saveMovieToJson(data);
        } else {
          console.warn("Movie not found:", data.Error);
        }
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  };

  const saveMovieToJson = (movie) => {
    const isValidMovie = movie && movie.Response === "True" &&
      movie.Title && movie.Year && movie.Poster !== "N/A";

    if (isValidMovie) {
      const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
      const updatedMovies = [...savedMovies, movie];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      setSavedMovies(updatedMovies);
    } else {
      console.warn('Invalid movie data:', movie);
    }
  };

  // Load movies from localStorage and filter invalid entries
  useEffect(() => {
    const savedMoviesJson = localStorage.getItem("movies");
    try {
      if (savedMoviesJson) {
        const savedMovies = JSON.parse(savedMoviesJson);
        const validMovies = savedMovies.filter(movie =>
          movie && movie.Response === "True" &&
          movie.Title && movie.Year && movie.Poster !== "N/A"
        );
        setSavedMovies(validMovies);
        localStorage.setItem("movies", JSON.stringify(validMovies));
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
    }
  }, []);

  // Handle deletion of a movie
  const handleDeleteMovie = (movieToDelete) => {
    const updatedMovies = savedMovies.filter(movie => movie !== movieToDelete);
    setSavedMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <SearchForm onSearch={fetchMovieData} />
      {movieData && <MovieInfo movie={movieData} />}
      <h2>Saved Movies</h2>
      {savedMovies.length > 0 ? (
        savedMovies.map((movie, index) => (
          <MovieInfo key={index} movie={movie} onDelete={handleDeleteMovie} />
        ))
      ) : (
        <p>No saved movies.</p>
      )}
    </div>
  );
}

export default MovieSearch;
