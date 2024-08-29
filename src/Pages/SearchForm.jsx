import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(movieTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder="Enter movie title"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
