import React from 'react'

interface props{
    params:{
        id:number
        
    }
}

const UserPhotos = ({params:{id}}:props) => {
  return (
    <div>User {id} photo list </div>
  )
}

export default UserPhotos