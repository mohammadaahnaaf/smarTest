import React from 'react'
import Link from 'next/link'

type Props = {}

export const Header = (props: Props) => {
  const [expand, setExpand] = React.useState(false)
  const navItems = [
    {
      title: 'About',
      link: '#'
    },
    {
      title: 'API',
      link: '#'
    },
    {
      title: 'Features',
      link: '#'
    },
  ]

  return (
    <header className="py-4 bg-black sm:py-6" x-data="{expanded: false}">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              SmarTest
            </Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-white" onClick={() => setExpand(!expand)}>
              <span>
                {!expand ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
            {navItems.map((x, index) => (
              <Link key={index} href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> {x.title} </Link>
            ))}
          </nav>
        </div>

        <nav className={expand ? `block` : `hidden`} x-collapse>
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            {navItems.map((x, index) => (
              <Link key={index} href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> {x.title} </Link>
            ))}
          </div>
        </nav>
      </div>
    </header >
  )
}