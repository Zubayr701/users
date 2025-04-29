import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-white shadow p-4 min-h-screen'> 
        <Link className='text-black' href="/users">Users</Link>
    </div>
  )
}

export default Sidebar
