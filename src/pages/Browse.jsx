import React, { useState, useEffect } from 'react';
import { GenreCard } from '../components';


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

import { genreData } from '../components/utils/genreName';

const Browse = () => {

    const genreList = genreData.map(mId => {
        return genreIds.find(data => {
            if (mId.name === data.name)
                return data
            return null
        })
    })

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch movies for each genre
                const promises = genreList.map(async (genreId) => {
                    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId.id}&page=1`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch movies');
                    }
                    const data = await response.json();
                    return data.results.slice(0, 10);
                });

                // Wait for all promises to resolve
                const results = await Promise.all(promises);

                // Flatten the array of arrays into a single array of movies
                const flattenedMovies = results.reduce((acc, val) => acc.concat(val), []);

                setMovies(flattenedMovies);
                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMovies();

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    let genreName = []
    genreList.map(genre => {
        genreName.push(genre.name)
        console.log(genre.name)
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
                    <p style={{
                        margin : '0px',
                        position: 'absolute',
                        top: '20px',
                        left: '30px',
                        color: '#72DB73',
                        fontSize : '35px',
                        fontFamily : 'Single Day'
                    }}>
                        Super App
                    </p>

                    <img src="../src/assets/browseIcon.png" alt="dashboardIcon" style={{
                        position: 'fixed',
                        right: '120px',
                        top: '20px',
                        height: '60px',
                        width: '60px'     
                    }} />
                </div>
                <div>
                    <p style={{
                        fontFamily: 'Roboto',
                        fontSize: '20px',
                        color: 'white',
                        margin: '15px 0px 2px 50px',
                        padding: '0px'
                    }}>Entertainment according to your choice</p>
                </div>
                <div>
                    {
                        genreName.map((name, index) => {
                            return <GenreCard
                                key={name}
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