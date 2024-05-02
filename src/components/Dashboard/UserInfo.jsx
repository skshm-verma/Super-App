import React from 'react'
import { userInfo } from '../utils/userInfo'
import { genreData } from '../utils/genreName'
import image15 from '../../../public/assets/image15.png'
import './Dashboard.css'

const UserInfo = () => {

  const user = userInfo
  const genreName = genreData

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
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p style={{ fontSize: '3.0rem' }}>{user.userName}</p>
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
