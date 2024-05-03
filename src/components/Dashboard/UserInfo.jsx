import React, { useEffect, useState } from 'react'
import image15 from '../../../public/assets/image15.png'
import './Dashboard.css'

const UserInfo = () => {

  const [user, setUserInfo] = useState([]);
  const [genreName, setGenreName] = useState([])

  useEffect(() => {
    const userInfoDataJson = localStorage.getItem('formData');
    if (userInfoDataJson) {
      const parsedUserInfo = JSON.parse(userInfoDataJson);
      setUserInfo(parsedUserInfo);
    }

    const selectedMoviesJSON = localStorage.getItem("selectedMovies");
    const moviesDataJSON = localStorage.getItem("moviesData");

    if (selectedMoviesJSON && moviesDataJSON) {
      const selectedMovies = JSON.parse(selectedMoviesJSON);
      const moviesData = JSON.parse(moviesDataJSON);

      const genreData = selectedMovies.map((id) => {
        return moviesData.find((movie) => movie.id === id);
      });
      setGenreName(genreData);
    }

  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount




  return (
    <div className='userInfoDiv'>

      <div style={{
        display: 'flex',
        margin: '1rem 1.5rem',
        gap: '3rem'
      }}>
        <img src={image15} alt="userAnimatedIcon" style={{ height: '250px' }} />
        <div>

          <div className='userInfo'>
            <p>{user.name || ''}</p>
            <p>{user.email || ''}</p>
            <p style={{ fontSize: '3.0rem' }}>{user.userName || ''}</p>
          </div>

          <div style={{ marginTop: '15px' }}>
            {genreName.map(item => {
              return <p key={item.id} className='userChipStyle'>{item.name}</p>
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserInfo
