import React from 'react'
import { useProfile, ProfileProps } from './useProfile'

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const {} = useProfile(props)

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
