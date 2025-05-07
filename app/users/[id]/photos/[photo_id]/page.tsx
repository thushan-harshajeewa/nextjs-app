import React from 'react'

interface props{
    params:{
        id:number,
        photo_id:number
    }
}

const PhotoDetails = ({params:{id,photo_id}}:props) => {
  return (
    <div>User {id} Photo {photo_id} details </div>
  )
}

export default PhotoDetails