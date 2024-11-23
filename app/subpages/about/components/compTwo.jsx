import Image from "next/image";

 
const FeatureItem = ({ id, title, description, advantages, icon, image }) => {
return (
    <div className={`flex flex-col md:items-center gap-10 lg:gap-14 ${id%2===0? "md:flex-row" :"md:flex-row-reverse"}`}>
        <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-4 space-y-8">
            <div className="space-y-6">
                <span className="p-2 rounded-md bg-purple-100 text-orange-500 dark:bg-gray-900 dark:text-purple-500 flex w-max">
                    {icon}
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white uppercase">
                    {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    {description}
                </p>
            </div>
            <ul role="list" className="space-y-5 children:flex children:items-center children:gap-4 children:text-gray-600 dark:children:text-gray-400">
    {
        advantages.map(advantage => (
            <li key={advantage.id} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-orange-600 dark:fill-purple-500 mr-2">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                {advantage.text}
            </li>
        ))
    }
</ul>

        </div>
        <div className="flex-1 relative bg-gradient-to-tr from-orange-100 to-orange-300 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
            <Image src={image} alt="illustration" width={1800} height={1000} className="w-full h-auto rounded-lg" />
        </div>
    </div>
)
}
import { FaGlobe, FaFileAlt, FaHandsHelping } from 'react-icons/fa';

const features = [
    {
        id: 1,
        title: "Global Expertise for Multiple Countries",
        icon: <FaGlobe className="h-10 w-10" />,
        description: "We specialize in visa and immigration services for a wide range of countries, offering expert advice on the best immigration options based on your goals.",
        advantages: [
          { id: 1, text: "Visa services for countries including the UK, USA, Canada, and more" },
          { id: 2, text: "Knowledgeable consultants familiar with each country's immigration laws" },
          { id: 3, text: "Assistance with work, student, and family visas across the globe" }
        ],
        image: "/b1.webp"
    },
    {
        id: 2,
        title: "Seamless Document Processing and Submission",
        icon: <FaFileAlt className="h-10 w-10"  />,
        description: "We handle all the documentation, ensuring all forms are correctly filled out and submitted on time to avoid delays in your visa processing.",
        advantages: [
          { id: 1, text: "Thorough document checks to meet all visa requirements" },
          { id: 2, text: "Ensuring timely and accurate document submission" },
          { id: 3, text: "Helping you avoid common mistakes that cause application delays" }
        ],
        image: "/b2.webp"
    },
    {
        id: 3,
        title: "Post-Visa Support for a Smooth Transition",
        icon: <FaHandsHelping className="h-10 w-10"  />,
        description: "Our services don’t stop once your visa is approved. We provide assistance with your relocation and settlement, ensuring a smooth transition to your new country.",
        advantages: [
          { id: 1, text: "Post-visa counseling to help you adjust to life in a new country" },
          { id: 2, text: "Help with finding housing, schools, and job opportunities" },
          { id: 3, text: "Ongoing support to help you navigate your new life abroad" }
        ],
        image: "/b3.webp"
    }
];

 
const Features = () => {
return (
    <section className="py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col  space-y-16">
                <div className="flex flex-col justify-center text-center  mx-auto md:max-w-4xl space-y-5">
                <h1 className="text-3xl font-semibold text-orange-500 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight uppercase">
                Unlock Efficiency and Drive Success with Our<br/> Cutting-Edge Solutions
                </h1>
                <div className="absolute bottom-[0rem] lg:-bottom-[35rem] left-[0rem] w-64 h-64 bg-orange-600 rounded-full opacity-20"></div>
                <div className="absolute bottom-[0rem] lg:-bottom-[60rem] left-[68rem] w-64 h-64 bg-orange-600 rounded-full opacity-20"></div>
                <div className="absolute bottom-[0rem] lg:-bottom-[89rem] left-[0rem] w-64 h-64 bg-orange-600 rounded-full opacity-20"></div>
                <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                At VJC Overseas, we offer more than just services; we provide tailored solutions that streamline your international journey. Whether you&apos;re seeking educational opportunities, career advancements, or immigration advice, our expertise and tools will help you achieve your goals with confidence and ease.
                </p>

                </div>
                <div className="grid divide-y divide-gray-300/60 dark:divide-gray-800/30 gap-12 children:py-5 first:pt-0 last:pb-0">
                    {
                        features.map(feature=>(
                            <FeatureItem key={feature.id} {...feature}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
)
}
 
export default Features