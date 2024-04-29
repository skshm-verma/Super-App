const selectedMovies = JSON.parse(localStorage.getItem('selectedMovies'))
const moviesData = JSON.parse(localStorage.getItem('moviesData'))

export const genreData = selectedMovies.map(id => {
    return moviesData.find((movie) => movie.id === id)
})