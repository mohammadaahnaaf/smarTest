import React from 'react'
import { Header, Modal } from '..'
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

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div>
      <Header />
      <Modal open={isOpen} setOpen={(x: any) => setIsOpen(x)} />
      <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">A Great Hub For Genius, Intelectuals & Thinkers</p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">How Smart</span> Are You?</h1>

              <p className="max-w-xl mt-4 text-lg md:text-xl font-normal text-gray-400 sm:mt-8">
                The Answers Often Hide Within Questions. You Need To Become Smart Enough To Uncover It.
                Just Like A Jar That Must Start Empty, As Intelligence Too Begins As A Blank Slate.
                Remember No One Is Born Smart; It&apos;s A Hidden Gem Unearthed Through Perseverance.
              </p>

              {/* <p className="max-w-xl mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Amongst the earth&lsquo;s depths lie treasures of immense worth. To own the preciousness akin to a diamond, one must withstand formidable pressure and embrace enduring patience. Much like the extraction of a diamond demands a profound delve into the mine, attaining brilliance calls for a venture into the depths of life. SmarTest illuminates the path to this cache of exquisite diamonds.
              </p> */}

              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <button
                  type='button'
                  onClick={() => setIsOpen(true)}
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <div className='relative lg:h-[40vh] h-[38vh] w-full lg:w-[50vh] xl:h-[50vh] xl:w-[60vh]'>
                <Image fill className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl hover:scale-105 cursor-pointer duration-300"
                  src="/smartest-icon.png"
                  // src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" 
                  alt="Smartest-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}