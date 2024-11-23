import Link from "next/link";
 
const iconRender = (val) => {
switch (val) {
    case "stat-ico":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    default:
        return <>No Icon</>;
}
}
 
const FeatureItem = ({ title, description, icon, id }) => {
return (
    <div className={
        ` space-y-4 
        ${id === 1 ? "sm:pr-4 pb-4"
            : id === 2 ? "pt-4 sm:pt-0 sm:pl-4 pb-4 sm:!border-t-transparent"
                : id === 3 ? "sm:pr-4 pt-4 sm:!border-l-transparent" : "sm:pl-4 pt-4"}
        `
    }>
        <span className="p-2 rounded-md bg-blue-50 text-blue-700 dark:bg-gray-900 dark:text-blue-500 flex w-max">
            {icon}
        </span>
        <h1 className="flex text-lg font-semibold  text-gray-900 dark:text-white uppercase">
            {title}
        </h1>
        <p className="text-sm font-light text-gray-700 dark:text-gray-300 text-justify">
            {description}
        </p>
        <Link href="#" className="text-sky-700 dark:text-sky-500 flex items-center gap-x-3 w-max">
            Check Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
        </Link>
    </div>
)
}
import { FaGlobe, FaFileAlt, FaHandsHelping, FaRegAddressBook } from 'react-icons/fa';

const features = [
    {
        id: 1,
        title: "Global Visa and immigration Expertise",
        description: "We offer expert consultation for visa applications across multiple countries, ensuring you choose the best immigration path.",
        icon: <FaGlobe className="w-6 h-6 text-orange-500" />
    },
    {
        id: 2,
        title: "Document Preparation & Processing",
        description: "Our team ensures all your visa documents are properly prepared and submitted on time, preventing any delays in your application.",
        icon: <FaFileAlt className="w-6 h-6 text-orange-500" />
    },
    {
        id: 3,
        title: "Personalized Immigration Support",
        description: "We guide you throughout the visa process with personalized support, from application submission to post-visa services.",
        icon: <FaHandsHelping className="w-6 h-6 text-orange-500" />
    },
    {
        id: 4,
        title: "Post-Visa Relocation Assistance",
        description: "Our services continue even after your visa is approved, with help for relocation, settling into your new country, and more.",
        icon: <FaRegAddressBook className="w-6 h-6 text-orange-500" />
    },
];

 
const Features = () => {
return (
    <section className="py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col gap-5">
                <div className="space-y-4 max-w-xl">
                <h1 className="text-3xl font-semibold text-orange-500 dark:text-gray-200 md:text-4xl xl:text-[2.75rem] leading-tight uppercase">
    Your Trusted Partner in Navigating Global Visa and Immigration Solutions
</h1>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
    At VJC Overseas, we simplify your visa and immigration process, offering expert guidance for a seamless transition to your desired destination.
</p>
            </div>
            <div className="mt-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                <div className="lg:w-[55%] lg:items-center grid sm:grid-cols-2  sm:divide-x divide-y divide-gray-300 dark:divide-gray-800">
                    {
                        features.map(feature => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))
                    }
                </div>
                <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white uppercase text-center">
    Focus on Your Global Aspirations
</h2>
<p className="text-gray-700 dark:text-gray-300 max-w-md text-center">
    At VJC Overseas, we handle the complexities of visa applications and immigration processes, allowing you to focus on your dreams of studying, working, or settling abroad. Let us be your trusted partner in navigating the immigration journey.
</p>

                    <div className="flex justify-center">
                    <Link href="#" className="bg-orange-500 text-white rounded-lg px-6 h-12 flex w-max items-center transform transition-transform duration-300 hover:translate-y-[-4px]">
                        Consult Now
                    </Link>

                        {/* <div className="absolute bottom-[0rem] lg:-bottom-[155rem] left-[54.50rem] w-64 h-64 bg-orange-600 rounded-full opacity-20"></div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
)
}
 
export default Features