import React, { useState } from 'react'
import { Box, Chip } from '../components'

const moviesData = [
  {
    id: 1,
    name: "Action",
    img: "../src/assets/actionImg.png",
    color: '#FF5209'
  },
  {
    id: 2,
    name: "Drama",
    img: "../src/assets/dramaImg.png",
    color: '#D7A4FF'
  },
  {
    id: 3,
    name: "Romance",
    img: "../src/assets/romanceImg.png",
    color: '#148A08'
  },
  {
    id: 4,
    name: "Thriller",
    img: "../src/assets/thrillerImg.png",
    color: '#84C2FF'
  },
  {
    id: 5,
    name: "Western",
    img: "../src/assets/westernImg.png",
    color: '#902500'
  },
  {
    id: 6,
    name: "Horror",
    img: "../src/assets/horrorImg.png",
    color: '#7358FF'
  },
  {
    id: 7,
    name: "Fantasy",
    img: "../src/assets/fantasyImg.png",
    color: '#FF4ADE'
  },
  {
    id: 8,
    name: "Music",
    img: "../src/assets/musicImg.png",
    color: '#E61E32'
  },
  {
    id: 9,
    name: "Fiction",
    img: "../src/assets/fictionImg.png",
    color: '#6CD061'
  },
]

const Movies = () => {

  const [selectedMovies, setSelectedMovies] = useState([])
  return (
    <>
      <div style={{
        display: 'flex',
        backgroundColor: 'black',
        position: 'relative'
      }}>


        <div style={{
          width: '50vw',
          height: '100vh',
          marginTop: '30px'
        }}>
          <span style={{color : '#72DB73' , display : 'block' , fontFamily : 'Single Day, cursive' , fontSize: '55px' , margin : '20px 7rem 10px 7rem' , padding : '20px'}}>
            Super app
          </span>
          <span style={{color : 'white' , display : 'block', fontSize: '70px' , margin : '10px 7rem' , padding : '20px'}}>
            Choose your <br />entertainment <br />category
          </span>
          <div style={{margin : '20px 7rem'}}>
            {selectedMovies.map((data) => {
              return <Chip key={data.id} moviesData={moviesData} id={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
            })}
          </div>


        </div>


        <div style={{
          width: '50vw',
          height: '100vh',
          marginTop: '30px',
          marginLeft: '10px',
          display: 'grid',
          gap: '3px 3px',
          gridTemplateColumns: '200px 200px 200px',
          gridTemplateRows: '180px 180px 180px'
        }}>
          {moviesData.map((data) => {
            return <Box key={data.id} data={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
          })}
        </div>
        <div style={{
          width: '120px',
          fontSize: '20px',
          backgroundColor: '#148A08',
          color: 'white',
          borderRadius: '25px',
          border: '1px solid #148A08',
          padding: '12px',
          textAlign: 'center',
          pointer : 'cursor',
          position: 'absolute',
          bottom: '70px',
          right: '160px'
        }}
        >
          <span>Next Page</span>
        </div>
      </div>
    </>
  )
}

export default Movies
