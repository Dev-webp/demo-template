import Image from "next/image"
import { FaGlobe } from 'react-icons/fa'; 
 
const Features = () => {
return (
    <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col  space-y-10">
                <div className="flex flex-col justify-center text-center  mx-auto md:max-w-4xl space-y-5">
                <span className="mx-auto w-max pl-5 uppercase font-semibold relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-orange-700 dark:before:bg-sky-600 text-orange-600 dark:text-blue-500 text-2xl">
  Our Expertise
</span>
<h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight uppercase">
  Drive Your Business Forward on the Global Stage
</h1>
<p className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
  Explore new global horizons and strengthen your international presence with our specialized visa and immigration services. Our experienced team is dedicated to supporting your business at every step, ensuring smooth and successful transitions for your global initiatives.
</p>

                </div>
                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
    <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-1 md:grid-cols-1 lg:order-1">
        <div className="flex flex-col space-y-6 justify-center md:justify-start">
            <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                {/* feature icon */}
                <FaGlobe className="w-5 h-5 text-orange-500" /> {/* Replaced with react-icon and set color */}
            </span>
            <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                Global Expansion Opportunities
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300 text-justify">
                Take your business global with our expert guidance on international expansion, visa applications, and market entry strategies.
            </p>
        </div>
        <div className="flex flex-col space-y-6 justify-center md:justify-start">
            <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                {/* feature icon */}
                <FaGlobe className="w-5 h-5 text-orange-500" /> {/* Replaced with react-icon and set color */}
            </span>
            <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                Seamless Visa and Immigration Solutions
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300 text-justify">
                We provide every end-to-end visa services, simplifying the complexities of international immigration for your team and business.
            </p>
        </div>
    </div>
    <div className="flex items-center justify-center order-3 md:col-span-2 lg:order-2 lg:row-span-2 lg:h-full">
        <div className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
            <Image src="/images/dash-light.webp" alt="illustration" height={1100} width={1800} className="wfull hauto" />
        </div>
    </div>
    <div className="order-1 grid gap-10 sm:grid-cols-2 md:order-2 md:grid-cols-1 lg:order-3">
        <div className="flex flex-col space-y-6 justify-center md:justify-start">
            <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                {/* feature icon */}
                <FaGlobe className="w-5 h-5 text-orange-500" /> {/* Replaced with react-icon and set color */}
            </span>
            <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                Expert Guidance for Global Mobility
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300 text-justify">
                Our team offers tailored solutions for your global workforce, ensuring efficient and smooth relocation processes.
            </p>
        </div>
        <div className="flex flex-col space-y-6 justify-center md:justify-start">
            <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
                {/* feature icon */}
                <FaGlobe className="w-5 h-5 text-orange-500" /> {/* Replaced with react-icon and set color */}
            </span>
            <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                Tailored Visa Solutions for Corporations
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300 text-justify">
                From work permits to business travel, we craft solutions designed to meet the unique needs of your organization’s global mobility.
            </p>
        </div>
    </div>
</div>
            </div>
        </div>
    </section>
)
}
 
export default Features