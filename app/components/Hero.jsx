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
            <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Home</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">About</Link>
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
 
import { motion } from "framer-motion"; // Import framer-motion
// Import your animation variants
import { containerVariants, titleVariants, desVariants } from "../animation"; // Adjust the path as needed

export default function HeroSection() {
  return (
    <>
      <Navbar />
     <section className="py-4 lg:py-0 mt-2 md:mt-0 lg:mt-0 bg-gradient-to-bl from-white to-white">
  <motion.div
    variants={""}
    initial="offscreen"
    animate="onscreen"
    className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10"
  >
    {/* Parallax Background with Overlay */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
      style={{
        backgroundImage: 'url(/7.webp)',
      }}
      animate={{
        y: ['0%', '5%'],  
      }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "easeInOut",
        },
      }}
      variants={containerVariants(0.4)}
    >
      {/* Overlay Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>
    </motion.div>

    {/* Left Section (Text) */}
    <motion.div
      variants={containerVariants(0.4)}
      className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto mb-0 lg:mb-0 relative z-10"
    >
      <motion.h1
        variants={titleVariants}
        className="font-semibold uppercase leading-tight text-center text-teal-950 text-4xl sm:text-5xl lg:text-[3.50rem]"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600">
        Your Dreams Are Our Blueprint for Success!
        </span>
      </motion.h1>
      <motion.p
        variants={desVariants}
        className="flex text-gray-900 tracking-tight text-center md:font-medium max-w-xl mx-auto lg:max-w-none"
      >
        Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
      </motion.p>
      <motion.div
        variants={containerVariants(0.6)}
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 w-full"
      >
        <Link
          href="#"
          className="px-6 items-center h-12 rounded-3xl bg-orange-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto transform hover:scale-105 transition-transform"
        >
          Get started
        </Link>
        <Link
          href="#"
          className="px-6 items-center h-12 rounded-3xl text-orange-700 border border-gray-100 bg-gray-100 duration-300 ease-linear flex justify-center w-full sm:w-auto transform hover:scale-105 transition-transform"
        >
          Book a call
        </Link>
      </motion.div>
    </motion.div>

    {/* Right Section (Image and Form) */}
    <motion.div
      variants={containerVariants(0.8)}
      initial="offscreen"
      animate="onscreen"
      className="flex aspect-square lg:aspect-auto h-[20rem] tablet:h-[30rem] lg:h-[35rem] relative mt-44 tablet:mt-10 md:mt-6 lg:mt-6 z-10 ml-0 md:ml-0 lg:ml-0 tablet:ml-20"
    >
      <motion.div
        variants={containerVariants(1)}
        className="absolute right-10 lg:right-28 bottom-0 lg:bottom-28  h-[calc(190%-100px)]  lg:h-[calc(80%-10px)] w-4/5 rounded-3xl overflow-hidden border-4 border-gray-200 z-30 p-6 bg-white shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase text-center">
          Sign Up & Get Free Assistance
        </h2>
        <form className="space-y-1">
          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 bg-white text-gray-900 hover:border-orange-500 transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 bg-white text-gray-900 hover:border-orange-500 transition-all duration-300"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 bg-white text-gray-900 hover:border-orange-500 transition-all duration-300"
              placeholder="Your Phone Number"
              required
            />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 bg-white text-gray-900 hover:border-orange-500 transition-all duration-300"
              placeholder="Your Message"
              required
            />
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 max-w-xs text-white bg-orange-600 rounded-lg shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 transition ease-in-out duration-300 mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>

      <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 z-10 ml-60 mt-10">
        <Image
          src="/7.webp"
          alt="building plan image"
          width={1300}
          height={1300}
          className="w-full h-full object-cover z-30 transform hover:scale-105 transition-transform"
        />
      </div>

      <motion.div
        className="absolute bottom-[20rem] lg:-bottom-10 -right-10 w-64 h-64 bg-orange-600 rounded-full opacity-20"
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
</section>



    </>
  );
}