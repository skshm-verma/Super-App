import React from 'react'
import './Movies.css'

const Box = ({ data, selectedMovies, setSelectedMovies }) => {

  const handleSelection = () => {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies(selectedMovies.filter((id) => id !== data.id))
    } else {
      setSelectedMovies([
        ...selectedMovies, data.id
      ])
    }
  }
 
  return (
    <div
      style={{
        border: selectedMovies.includes(data.id) ? '4px solid #11B800' : '4px solid black',
        backgroundColor: (data.color)
      }}
      className='boxStyle'
      onClick={handleSelection}
    >
      <span style={{ display: 'block', color: 'white' }}>{data.name}</span>
      <img src={data.img} alt="genreImg" className='boxImg' />
    </div>
  )
}

export default Box
