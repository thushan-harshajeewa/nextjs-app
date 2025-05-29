import React, { ReactNode } from 'react'

interface prop{
    children:ReactNode
}

const layout = ({children}:prop) => {
  return (
    <div>
        <div className='w-2xl bg-amber-50'>this is side bar</div>
        {children}
    </div>
    
  )
}

export default layout