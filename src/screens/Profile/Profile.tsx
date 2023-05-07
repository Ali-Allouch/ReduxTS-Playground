import React from 'react'
import { useProfile, ProfileProps } from './useProfile'

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const {} = useProfile(props)

  return (
    <main>
      <h1>Profile</h1>
    </main>
  )
}

export default Profile
