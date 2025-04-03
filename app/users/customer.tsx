'use client'
import React, { useEffect, useState } from 'react'

const Customer = () => {

        const [customer,Setcustomer]=useState('harsha')

        useEffect(()=>{

            Setcustomer('full boy')

        },[])

  return (
    <div>customer liyanage full name is :{customer}</div>
  )
}

export default Customer