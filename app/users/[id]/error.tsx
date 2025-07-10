'use client'
import React from 'react'

interface props{
    error:Error
}

const ErrorPage = ({error}:props) => {
  return (
    <div>This is the error {error.message} </div>
  )
}

export default ErrorPage