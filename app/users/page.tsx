import { sort } from 'fast-sort';
import Link from 'next/link';



export interface User {
  id: number,

  name: string,
  email: string
  
}

interface prop{
  searchParams:Promise<{sortOrder:string}>
}


const Users = async ({searchParams}:prop) => {

    const {sortOrder}=await searchParams

    const users= await fetch('https://jsonplaceholder.typicode.com/users',{
      
        cache: 'no-store', 
      
    })
    const users_list:User[]=await users.json()
    const sortedUsers=sort(users_list).asc(sortOrder==='email'? user=>user.email:sortOrder==='name'?user=>user.name:user=>user.id)
    

  return (
    <div>
        <div className="text-3xl font-bold underline pl-8">users list</div>
        
        <p>{new Date().toLocaleTimeString()}</p>
        <Link href={'users?sortOrder=name'}>Name</Link>
        <Link href={'users?sortOrder=email'}>Email</Link>
        {sortedUsers?.map(user=>(
            <div key={user.id}>{user.name}</div>
        ))}

        {sortOrder}
        

        
        
    </div>
  )
}

export default Users