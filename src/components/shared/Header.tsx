import Link from 'next/link'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className=' flex justify-between w-full p-6 text-rose-500 bg-white backdrop-blur-sm bg-opacity-50'>
      <Link href='/' className='text-md font-bold'>
        SmarTest
      </Link>
    </header>
  )
}