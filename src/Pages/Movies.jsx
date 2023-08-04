function Movies() {
  const basePosterUrl =
    "https://www.themoviedb.org/t/p/w185_and_h278_multi_faces";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYyNGNkM2IzNjIwYTFjYjZmZmEwOGIzYmNhMmViMCIsInN1YiI6IjVmZDEyMGUxMmNlYjUzMDA0MmVlMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aBdfzlulpnHHeQ5yi__OgCmcOtrUUCuZL-xET525c0",
    },
  };
  fetch(
    "https://api.themoviedb.org/3/account/8263007/favorite/movies?language=en-US&page=1&sort_by=title.asc",
    options
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayMovies(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

  // Displaying the response
  function displayMovies(data) {
    console.log(`how many movies ${data.results}`);
    let dataResults = data.results;

    dataResults.forEach(function (dataResult) {
      console.log(`Title ${dataResult.title}`);
      let movieTitle = document.createElement("h4");
      movieTitle.innerHTML = dataResult.title;
      let titleWrapper = document.getElementById("movies");
      titleWrapper.appendChild(movieTitle);

      var moviePoster = dataResult.poster_path;
    });
  }

  return (
    <>
      <div className='content'>
        <h2>Garage Bar</h2>
        <div id='movies'></div>
      </div>
    </>
  );
}

export default Movies;
