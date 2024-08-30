import React, { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo";
import supabase from "../components/SupabaseClient";

function MovieList() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    // Load movies from Supabase when the component mounts
    const fetchSavedMovies = async () => {
      const { data, error } = await supabase
        .from('movies')
        .select('*');

      if (error) {
        console.log('Error fetching saved movies:', error);
      } else {
        setSavedMovies(data);
        console.log(`set ${data}`)
      }
    };

    fetchSavedMovies();
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