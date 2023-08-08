import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieSearch = () => {
  const fetch = require("node-fetch");

  const url = "https://api.themoviedb.org/3/account/9901303/lists?page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYyNGNkM2IzNjIwYTFjYjZmZmEwOGIzYmNhMmViMCIsInN1YiI6IjVmZDEyMGUxMmNlYjUzMDA0MmVlMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aBdfzlulpnHHeQ5yi__OgCmcOtrUUCuZL-xET525c0",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <div>
        {Array.from({ length: 26 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
          >
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      <ul>
        {/*filteredMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))*/}
      </ul>
    </div>
  );
};

export default MovieSearch;
