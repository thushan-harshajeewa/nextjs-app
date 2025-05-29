import React from 'react'

interface UserDetailsPageProps {
    params: Promise<{
        id: number
    }>
}
const UserDetailsPage = async ({params}:UserDetailsPageProps) => {
  const {id}=await params
  return (
    <div>UserDetailsPage {id}</div>
  )
}

export default UserDetailsPage