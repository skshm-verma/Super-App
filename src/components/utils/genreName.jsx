const selectedMoviesJSON = localStorage.getItem("selectedMovies");
const moviesDataJSON = localStorage.getItem("moviesData");

let genreData = [];

if (selectedMoviesJSON && moviesDataJSON) {
  const selectedMovies = JSON.parse(selectedMoviesJSON);
  const moviesData = JSON.parse(moviesDataJSON);

  genreData = selectedMovies.map((id) => {
    return moviesData.find((movie) => movie.id === id);
  });
}

export { genreData };