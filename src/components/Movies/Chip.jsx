import React from 'react'

const Chip = ({ moviesData, id, selectedMovies, setSelectedMovies }) => {
    const obj = moviesData.find((item) => item.id === id)
    const removeSelection = () => {
        setSelectedMovies(selectedMovies.filter((item) => item !== id))
    }
    return (
        <div style={{
            display: 'inline-block',
            margin: ' 10px 12px',
            padding: '8px',
            border: '1px solid #11B800',
            borderRadius : '25px',
            color: 'white',
            backgroundColor : '#148A08',
            width : '150px',
            fontSize : '18px',
            textAlign : 'center',
            fontFamily : 'Roboto'
        }}>
            <span>{obj.name}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ cursor: 'pointer', color : '#085C00'}} onClick={removeSelection}>X</span></span>
        </div>
    )
}

export default Chip
