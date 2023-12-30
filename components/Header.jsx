import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div
    className='flex justify-between items-center bg-slate-800 px-8 py-3'
    >
    <Link className='text-white font-bold' href='/'>List</Link>
    <Link className='text-slate-800 font-bold bg-white p-4 border border-white-800' href='/additem'>AddItem</Link>
    </div>
  )
}

export default Header