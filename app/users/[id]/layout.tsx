import React, { ReactNode } from 'react'

interface props{
    children:ReactNode
}

const layout = ({children}:props) => {
  return (
    <>
        <h1>This is the layout</h1>
        {children}

    </>
  )
}

export default layout