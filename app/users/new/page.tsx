'use client'
import { useRouter } from 'next/navigation'
import React from 'react'




const Page = () => {

  const Router=useRouter()
    
  return (
    <div>
      <button className='btn btn-danger' onClick={()=>Router.push('/users')} >Create</button>

    </div>
  )
}

export default Page