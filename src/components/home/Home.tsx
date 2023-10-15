import React from 'react'
import { Header } from '..'
import Image from 'next/image'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className='bg-gradient-to-l from-rose-100 to-teal-100 w-full h-screen'>
      <Header />
      <div className='mx-auto w-full mt-6 max-w-7xl h-auto'>
        Bello
      </div>
    </div>
  )
}



export const Main = () => {


  return (

    <div>
      <Header />
      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">A Great Hub For Genius, Intelectuals & Thinkers</p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">How Smart</span> Are You?</h1>
              <p className="max-w-xl mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Amongst the earth&lsquo;s depths lie treasures of immense worth. To own the preciousness akin to a diamond, one must withstand formidable pressure and embrace enduring patience. Much like the extraction of a diamond demands a profound delve into the mine, attaining brilliance calls for a venture into the depths of life. SmarTest illuminates the path to this cache of exquisite diamonds.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <button
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                >
                  Explore Now
                </button>
              </div>

              {/* <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                        <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                      </linearGradient>
                    </defs>
                  </svg> 

                  <span className="ml-2 text-base font-normal text-white"> 42 new design inspiration was added last week </span>
                </div>
              </div> */}
            </div>

            <div className="hidden lg:flex mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <div className='relative h-[40vh] w-[50vh] xl:h-[50vh] xl:w-[60vh]'>
                <Image fill className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}