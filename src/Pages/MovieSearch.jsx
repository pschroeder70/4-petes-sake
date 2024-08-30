import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import MovieInfo from "./MovieInfo";
import supabase from "../components/SupabaseClient";

function MovieSearch() {
  const [movieData, setMovieData] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  const fetchMovieData = async (title, year) => {
    const formattedTitle = title.split(" ").join("+");
    let url = `http://www.omdbapi.com/?t=${encodeURIComponent(formattedTitle)}&apikey=${apiKey}`;
    
    if (year) {
      url += `&y=${year}`; // Append year if provided
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.Response === "True") {
        setMovieData(data);
        await saveMovieToSupabase(data);
      } else {
        console.warn("Movie not found:", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const saveMovieToSupabase = async (movie) => {
    const { data, error } = await supabase
      .from('movies')
      .insert([{
        title: movie.title,
        year: movie.year,
        rated: movie.rated,
        released: movie.released,
        runtime: movie.runtime,
        genre: movie.genre,
        director: movie.director,
        writer: movie.writer,
        actors: movie.actors,
        plot: movie.plot,
        language: movie.language,
        country: movie.country,
        awards: movie.awards,
        poster: movie.poster,
        ratings: movie.ratings,
        metascore: movie.metascore,
        imdbrating: movie.imdbRating,
        imdbvotes: movie.imdbVotes,
        imdbid: movie.imdbID,
        type: movie.type,
        dvd: movie.DVD,
        boxoffice: movie.BoxOffice,
        production: movie.Production,
        website: movie.Website,
        response: movie.Response
      }]);

    if (error) {
      console.error('Error saving movie to Supabase:', error);
    } else {
      // Refresh the list of saved movies after adding a new one
      fetchSavedMovies();
    }
  };

  const fetchSavedMovies = async () => {
    const { data, error } = await supabase
      .from('movies')
      .select('*');

    if (error) {
      console.error('Error fetching saved movies:', error);
    } else {
      setSavedMovies(data);
    }
  };

  // Load movies from Supabase when the component mounts
  useEffect(() => {
    fetchSavedMovies();
  }, []);

  // Handle deletion of a movie
  const handleDeleteMovie = async (movieToDelete) => {
    const { error } = await supabase
      .from('movies')
      .delete()
      .eq('imdbid', movieToDelete.imdbID);

    if (error) {
      console.error('Error deleting movie from Supabase:', error);
    } else {
      // Refresh the list of saved movies after deletion
      fetchSavedMovies();
    }
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