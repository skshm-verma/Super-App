import React from 'react'
import { userInfo } from '../utils/userInfo'
import { genreData } from '../utils/genreName'
const UserInfo = () => {

    const user = userInfo
    const genreName = genreData

  return (
    <div>
      <p>User Info</p>
      <p>{user.name}</p>
      <p>{user.userName}</p>
      <p>{user.email}</p>
      {genreName.map(item=> {
        return <p key={item.id}>{item.name}</p>
      })}
    </div>
  )
}

export default UserInfo
