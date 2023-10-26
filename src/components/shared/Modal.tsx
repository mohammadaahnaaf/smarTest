import React from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
  open: boolean
  setOpen: any
}

export const Modal = (props: Props) => {

  const isOpen = props.open
  const setIsOpen = props.setOpen

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-black bg-opacity-80 backdrop-blur-md ring-2 ring-rose-600 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-4xl text-center leading-6 text-white"
                >
                  Are You Smart?
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-lg font-semibolb text-center text-sky-500">
                    Click <span className='text-purple-500 font-bold'>&quot;No&quot;</span> if you believe you are smart.
                    Click <span className='text-purple-500 font-bold'>&quot;Yes&quot;</span> if you are not.
                  </p>
                </div>

                <div className="my-4 flex gap-4 justify-center">
                  <div className="relative inline-flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <button
                      type="button"
                      className="relative w-28 inline-flex items-center justify-center px-8 py-2 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                  </div>

                  <div className="relative inline-flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <button
                      type="button"
                      className="relative w-28 inline-flex items-center justify-center px-8 py-2 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className='flex justify-between border-t pt-4 border-rose-800 w-full'>
                  <div className="relative inline-flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <button
                      type="button"
                      className="relative w-28 inline-flex items-center justify-center px-8 py-2 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="relative inline-flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <button
                      type="button"
                      className="relative w-28 inline-flex items-center justify-center px-8 py-2 text-base font-normal hover:ring-2 hover:ring-cyan-300 duration-300 hover:text-cyan-400 bg-black border border-transparent rounded-lg"
                      onClick={closeModal}
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}