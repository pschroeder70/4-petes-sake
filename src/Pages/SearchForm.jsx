import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(movieTitle, year);
    // Clear the form fields by resetting state
    setMovieTitle("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder="Enter movie title"
        required
      />
      <input
        type="text"
        name="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Enter year (optional)"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
