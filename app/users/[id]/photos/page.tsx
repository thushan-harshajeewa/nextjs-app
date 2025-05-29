import React from 'react'

interface props{
    params:Promise<{
        id:number
        
    }>
}

const UserPhotos = async ({params}:props) => {
  const {id}=await params
  return (
    <div>User {id} photo list </div>
  )
}

export default UserPhotos