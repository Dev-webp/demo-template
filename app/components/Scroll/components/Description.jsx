import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaUserGraduate, FaFileAlt } from "react-icons/fa";

export default function Description() {
    return (
        <div className="relative flex justify-center items-center py-24 md:py-32 lg:py-32 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-30">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    fill="none"
                >
                    <path
                        d="M400 200C550 250 650 150 700 300C750 450 600 500 400 500C200 500 50 450 100 300C150 150 250 150 400 200Z"
                        fill="rgba(255,255,255,0.3)"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative max-w-[70%] text-center">
                <motion.h1
                    className="text-[6vw] lg:text-[4vw] font-bold uppercase leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Turn Dreams Into Destinations
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl font-medium max-w-[80%] mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                >
                    Empowering your journey with trusted visa and immigration solutions
                    for a brighter future.
                </motion.p>
            </div>

            {/* Boxes with Hover Effects */}
            <div className="relative hidden  lg:flex  justify-center gap-4 mt-12 mr-4">
    {/* Box 1 */}
    <div className="relative w-60 h-72 bg-white rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all">
        {/* Icon Container */}
        <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
            <FaRegHandshake className="text-orange-500 text-4xl group-hover:text-white" />
        </div>

        {/* Box Content */}
        <div className="p-6 flex flex-col justify-between h-full text-center"> <br/>
            <h3 className="text-2xl font-bold text-black text-left mt-6">Visa Consultation</h3>
            <p className="text-sm text-gray-600 text-left mb-8">Get expert advice on the visa process, documentation, and requirements.</p>
        </div>

        {/* Bottom Line on Hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
    </div>

    {/* Box 2 */}
    <div className="relative w-60 h-72 bg-white rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all">
        {/* Icon Container */}
        <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
            <FaFileAlt className="text-orange-500 text-4xl group-hover:text-white" />
        </div>

        {/* Box Content */}
        <div className="p-6 flex flex-col justify-between h-full text-center">
            <h3 className="text-2xl font-bold text-black text-left mt-16">Document Assistance</h3>
            <p className="text-sm text-gray-600 text-left mb-8">We help you prepare, manage, and organize your documents for visa applications.</p>
        </div>

        {/* Bottom Line on Hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
    </div>

    {/* Box 3 */}
    <div className="relative w-60 h-72 bg-white rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all">
        {/* Icon Container */}
        <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
            <FaUserGraduate className="text-orange-500 text-4xl group-hover:text-white" />
        </div>

        {/* Box Content */}
        <div className="p-6 flex flex-col justify-between h-full text-center">
            <h3 className="text-2xl font-bold text-black text-left  mt-16">Personalized Guidance</h3>
            <p className="text-sm text-gray-600 text-left mb-8">Receive one-on-one support from experienced consultants for a smooth visa process.</p>
        </div>

        {/* Bottom Line on Hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
    </div>
</div>


            {/* Decorative Elements */}
            <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-20"
                animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-300 rounded-full opacity-20"
                animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
        </div>
    );
}
