function Movies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYyNGNkM2IzNjIwYTFjYjZmZmEwOGIzYmNhMmViMCIsInN1YiI6IjVmZDEyMGUxMmNlYjUzMDA0MmVlMGY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aBdfzlulpnHHeQ5yi__OgCmcOtrUUCuZL-xET525c0",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/account/8263007/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
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
    const dataResults = data.results;

    dataResults.forEach(function (dataResult) {
      console.log(`Title ${dataResult.title}`);
      let movieTitle = document.createElement('h4')
      movieTitle.innerHTML = dataResult.title;
      let titleWrapper = document.getElementById('movies');
      titleWrapper.appendChild(movieTitle);
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
