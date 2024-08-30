// uploadData.mjs
import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises'; // Use fs/promises for async file operations

// Replace with your Supabase URL and key
const SUPABASE_URL = 'https://yaetaxrnkzpdpadbhmnd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZXRheHJua3pwZHBhZGJobW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzM0NDgsImV4cCI6MjA0MDYwOTQ0OH0.2A8IPqLT0D7Xx3bl6SSlpXrCptXD1gi_vFTNpuEvj-4';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Read the JSON file and upload data
const uploadData = async () => {
  try {
    const fileData = await fs.readFile('./movies.json', 'utf8');
    const movieData = JSON.parse(fileData);

    // Ensure movieData is an array
    const movies = Array.isArray(movieData) ? movieData : [movieData];

    const { data, error } = await supabase
      .from('movies')
      .insert(movies.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        rated: movie.Rated,
        released: movie.Released,
        runtime: movie.Runtime,
        genre: movie.Genre,
        director: movie.Director,
        writer: movie.Writer,
        actors: movie.Actors, // Match the column name in Supabase
        plot: movie.Plot,
        language: movie.Language,
        country: movie.Country,
        awards: movie.Awards,
        poster: movie.Poster,
        ratings: movie.Ratings, // Supabase expects JSONB
        metascore: movie.Metascore,
        imdbrating: movie.imdbRating,
        imdbvotes: movie.imdbVotes,
        imdbid: movie.imdbID,
        type: movie.Type,
        dvd: movie.DVD,
        boxoffice: movie.BoxOffice,
        production: movie.Production,
        website: movie.Website,
        response: movie.Response
      })));

    if (error) {
      throw error;
    }

    console.log('Data uploaded successfully:', data);
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

uploadData();
