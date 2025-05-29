import React from 'react'

interface props{
    params:Promise<{
        id:number,
        photo_id:number
    }>
}

const PhotoDetails = async ({params}:props) => {
  const {id,photo_id}=await params
  return (
    <div>User {id} Photo {photo_id} details </div>
  )
}

export default PhotoDetails