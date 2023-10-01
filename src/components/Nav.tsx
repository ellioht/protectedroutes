import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <ul className='flex m-10 gap-10'>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/clientside">
          <li>Client Side</li>
        </Link>
        <Link href="/clientsidehoc">
          <li>Client Side with HOC</li>
        </Link>
        <Link href="/serverside">
          <li>Server Side</li>
        </Link>
        <Link href="/middlewareside">
          <li>Middleware</li>
        </Link>
      </ul>
    </div>
  )
}

export default Nav