


import React from 'react'

interface Props{
    params: Promise<{ slug: string }>
    searchParams:Promise<{sortOrder:string}>
}

const page = async ({params,searchParams}:Props) => {
  const { slug } = await params
  const {sortOrder}=await searchParams
  return (
    <div>product page {slug} {sortOrder}</div>
  )
}

export default page