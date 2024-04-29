import React from 'react'
import { News, Notes, UserInfo } from '../components'

const Dashboard = () => {
  return (
    <>
      <div>
        <UserInfo />
      </div>
      <div>
        <Notes />
      </div>
      <div>
        <News />
      </div>
    </>

  )
}

export default Dashboard
