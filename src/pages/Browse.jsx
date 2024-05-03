import React, { useState, useEffect } from 'react';
import { GenreCard } from '../components';
import browseIcon from '../../public/assets/browseIcon.png'
import '../App.css'

const API_KEY = '022a9681d0072a133bd089449b9c74a6';
const BASE_URL = 'https://api.themoviedb.org/3';     //Base URL for fetching movie end point
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'; // Base URL for movie posters

const genreIds = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]



const Browse = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [genreList, setGenreList] = useState([])
    const [flag, setFlag] = useState(false)

    const fetchMovies = async () => {
        try {
            setLoading(true);
            setError(null);

            const promises = genreList.map(async (genreId) => {
                const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId.id}&page=1`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch movies for genre ${genreId.name}`);
                }
                const data = await response.json();
                return data.results.slice(0, 10);
            });

            const results = await Promise.all(promises);
            console.log('Fetched movie data:', results);
            const flattenedMovies = results.reduce((acc, val) => acc.concat(val), []);
            setMovies(flattenedMovies);
            setLoading(false);
        } catch (error) {
            setError(`Error fetching movies: ${error.message}`);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchGenreData = async () => {
            try {
                const selectedMoviesJSON = localStorage.getItem("selectedMovies");
                const moviesDataJSON = localStorage.getItem("moviesData");

                if (selectedMoviesJSON && moviesDataJSON) {
                    const selectedMovies = JSON.parse(selectedMoviesJSON);
                    const moviesData = JSON.parse(moviesDataJSON);

                    const genreData = selectedMovies.map((id) => {
                        return moviesData.find((movie) => movie.id === id)?.name;
                    });

                    console.log('Genre data from localStorage:', genreData);

                    const genreMemory = genreData.map(name => {
                        return genreIds.find(data => {
                            if (name === data.name)
                                return data;
                            return null;
                        });
                    });

                    console.log('Mapped genre data:', genreMemory);
                    setGenreList(genreMemory);
                    setFlag(true);
                }
            } catch (error) {
                console.error('Error fetching genre data:', error);
            }
        };

        fetchGenreData().then(() => {
            fetchMovies();
        });
    }, [flag]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    let genreName = []
    genreList.map(genre => {
        genreName.push(genre.name)
    })

    return (
        <div style={{
            backgroundColor: 'black',
            height: '100vh',
            overflow: 'auto'
        }}>

            <div style={{
                position: 'relative',
                height: '60px',
            }}>
                <p className='headerPara'> Super App </p>
                <img src={browseIcon} alt="dashboardIcon" className='headerImg' />
            </div>
            <div>
                <p className='browseBody'>Entertainment according to your choice</p>
            </div>
            <div>
                {
                    genreName.map((name, index) => {
                        return <GenreCard
                            key={index}
                            genre={name}
                            val1={index * 10}                     // Adjusting val1 based on index
                            val2={(index + 1) * 10}               // Adjusting val2 based on index
                            movies={movies}
                            IMAGE_URL={IMAGE_URL} />
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Browse