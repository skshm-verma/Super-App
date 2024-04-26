import React from 'react'

const Box = ({data ,selectedMovies , setSelectedMovies}) => {

    const handleSelection = () => {
        if(selectedMovies.includes(data.id)){
             setSelectedMovies(selectedMovies.filter((id) => id !== data.id))
        }else{
            setSelectedMovies([
                ...selectedMovies, data.id
            ])
        }    
    }
    console.log(selectedMovies)
  return (
    <div style={{
        border : selectedMovies.includes(data.id) ? '4px solid #11B800' : '4px solid black',
        backgroundColor : (data.color),
        borderRadius: '20px',
        padding : '10px',
        margin : '10px',
        cursor :'pointer'
    }}

    onClick={handleSelection}
    >
      <span style={{display : 'block' , color : 'white'}}>{data.name}</span>
      <img src = {data.img} alt="genreImg"  style={{width: '150px' , height : '90px' , display : 'block' , marginTop : '20px'}}/>
    </div>
  )
}

export default Box
