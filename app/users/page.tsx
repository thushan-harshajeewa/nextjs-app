

import React from 'react'


export interface User {
  id: number,
  name: string,
  email: string
}
const Users = async () => {
    const users= await fetch('https://jsonplaceholder.typicode.com/users',{
      
        cache: 'no-store', 
      
    })
    const users_list:User[]=await users.json()
  return (
    <div>
        <div className="text-3xl font-bold underline pl-8">users list</div>
        <p>{new Date().toLocaleTimeString()}</p>
        {users_list.map(user=>(
            <div key={user.id}>{user.name}</div>
        ))}
        

        
        
    </div>
  )
}

export default Users