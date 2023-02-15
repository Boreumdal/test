import React from 'react'
import { useSystem } from '../../context/SystemContext'

const Profile = () => {
  const { data } = useSystem()
  return (
    <div>
      <div>
        <div>
          <img src={data?.profile} alt="" />
        </div>
        <div>

        </div>
      </div>
      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Profile