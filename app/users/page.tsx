"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
interface UserType{
    id:number;
    name:{
        firstname:string;
        lastname:string;
    }
}
const page =  () => {
   const [users,setUsers] = useState<UserType[]>([])

   useEffect(()=>{
    async function fetchUsers(){
        const res = await fetch(`https://fakestoreapi.com/users`)
        const data = await res.json();
        setUsers(data)
    }
    fetchUsers()
   },[])

   console.log(users)

  return (
    <div>
      <h1>Okala  </h1>
      <div className='flex flex-col gap-4 ml-10'> 
        {users.map((user)=>(
            <div key={user.id}>
                <h3>
                    <Link href={`/users/${user.id}`}>
                        {user.name.firstname}
                    {user.name.lastname}
                    </Link>
                </h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default page;    