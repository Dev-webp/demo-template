"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTag } from 'react-icons/fa';

const Navbar = () => {
    const [navIsOpened, setNavIsOpened] = useState(false)
    const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened)
    }
    return (
    <>
      <header className="sticky left-0 top-0 w-full flex items-center h-16 border-b border-b-gray-100  z-40 bg-gray-50  bg-opacity-80 backdrop-filter backdrop-blur-xl ">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link href="#" className="text-xl font-semibold flex items-center gap-x-2">
            <span className="flex">
            <Image
            src="/logo-1.webp"
            alt="Logo 1"
            width={64}   // Equivalent to 16 * 4 for the desired size
            height={20} // You can adjust this depending on the aspect ratio
            className="object-contain"
          />
          <Image
            src="/logo-2.webp"
            alt="Logo 2"
            width={100}   // Equivalent to 24 * 4 for the desired size
            height={20} // Same here for aspect ratio
            className="object-contain"
          />
    </span>
    
              {/* <span className="text-lg text-gray-700 dark:text-gray-300">VJC OVERSEAS</span> */}
            </Link>
          </div>
          <div className={`
            absolute top-full  left-0 bg-white  lg:bg-transparent border-b border-gray-200 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
            ${navIsOpened ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"}
          `}>
            <ul className="flex flex-col lg:flex-row gap-14 text-sm lg:items-center text-gray-700  lg:w-full lg:justify-center uppercase">
              <li>
                <Link href="/" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Home</Link>
              </li>
              <li>
                <Link href="/subpages/about" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">About</Link>
              </li>
              <li>
                <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Services</Link>
              </li>
              <li>
                <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Work</Link>
              </li>
              <li>
                <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Clients</Link>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
      <Link
        href="#"
        className="px-6 items-center h-10 rounded-3xl text-orange-500 border border-gray-100  bg-gray-100 duration-300 ease-linear flex justify-center w-full sm:w-auto mr-1 "
      >
        {/* Discount icon */}
        <FaTag className="text-xl" />
      </Link>
    </div>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Link href="#" className="px-6 items-center h-10 rounded-3xl text-orange-500 border border-gray-100  bg-gray-100  duration-300 ease-linear flex justify-center w-full sm:w-auto">
                Book a call
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button onClick={() => {
              toggleNavbar()
            }} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100  pl-3 relative py-3">
              <span aria-hidden={true} className={`
                flex h-0.5 w-6 rounded bg-gray-800  transition duration-300
                ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
              `} />
              <span aria-hidden={true} className={`
                mt-2 flex h-0.5 w-6 rounded bg-gray-800  transition duration-300
                ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
                `} />
            </button>
          </div>
        </nav>
      </header>
    </>
    )
    }

    export default Navbar;