import React from 'react'
import './Browse.css'
const GenreCard = ({ genre, val1, val2, movies, IMAGE_URL }) => {

    return (
        <div className='cardStyle'>

            <h2 className='h2Tag'>{genre}</h2>

            <ul className='ultag'>
                {movies.slice(val1, val2).map(data => (

                    <div className='liDiv'>
                        <li key={data.id}
                            style={{
                                margin: '0.5rem', /* Add gap between items */
                                textAlign: 'center' /* Optional: Center title below image */
                            }}>
                            <span
                                style={{
                                    width: "150px",
                                    height: '200px',
                                    display: 'block'
                                }}>
                                {<img
                                    src={`${IMAGE_URL}${data.poster_path}`}
                                    alt={data.original_title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '12px'
                                    }}
                                />}
                            </span>

                            {/* <span style={{
                                color: '#72DB73',
                                margin: '10px',
                                padding: '0px'
                            }}>{data.original_title}</span> 
                            
                            if you want to add title for the movie*/}
                        </li>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default GenreCard

