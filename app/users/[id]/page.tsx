import React from 'react'

interface UserDetailsPageProps {
    params: {
        id: number
    }
}
const UserDetailsPage = ({params:{id}}:UserDetailsPageProps) => {
  return (
    <div>UserDetailsPage {id}</div>
  )
}

export default UserDetailsPage