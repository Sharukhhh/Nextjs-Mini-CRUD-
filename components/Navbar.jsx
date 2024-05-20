import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link href={'/'} className='text-white font-bold'>NEXTJS-CRUD</Link>
        <Link href={'/add'} className='bg-white font-bold p-2 hover:scale-95'>ADD ITEM</Link>
    </nav>
  )
}

export default Navbar