'use client'
import React from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import PageUsersFecth from './PageUsersFecth'

const page = () => {
    const queryClient = new QueryClient()
  return (
    <div>
        <h1>list</h1>
        <QueryClientProvider client={queryClient}>
      <PageUsersFecth />
    </QueryClientProvider>



    </div>
  )
}

export default page