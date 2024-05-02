import React from 'react'
import './Movies.css'

const Chip = ({ moviesData, id, selectedMovies, setSelectedMovies }) => {
    const obj = moviesData.find((item) => item.id === id)
    const removeSelection = () => {
        setSelectedMovies(selectedMovies.filter((item) => item !== id))
    }
    return (
        <div className='chipStyle'>
            <span>{obj.name}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ cursor: 'pointer', color : '#085C00'}} onClick={removeSelection}>X</span></span>
        </div>
    )
}

export default Chip
