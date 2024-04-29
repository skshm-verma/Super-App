import React from 'react'

const GenreCard = ({ genre, val1, val2, movies, IMAGE_URL }) => {

    return (
        <div style={{
            height: '280px',
            padding : '0px',
            margin: '12px 0px 5px 50px'
        }}>

            <h2 style={{
                display: 'block',
                margin : '12px 0px 5px 0px',
                padding : '0px',
                color: '#878787',
                fontFamily : 'Roboto'
            }}>{genre}</h2>

            <ul style={{
                listStyle: 'none', /* Remove default list dots */
                padding: '0',
                margin: '0',
                display: 'flex', /* Arrange items side-by-side */
                flexWrap : 'nowrap',
                height: '250px'
            }}>
                {movies.slice(val1, val2).map(data => (

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "150px",
                        height: '250px',
                        margin: '5px',
                        padding: '10px'
                        
                    }}>
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
                                    borderRadius : '12px'
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

