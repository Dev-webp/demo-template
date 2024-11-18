import { TfiWorld, TfiClipboard, TfiUser, TfiKey, TfiLock, TfiFile } from 'react-icons/tfi';

export default function HoverBoxes() {
    return (
        <div className="bg-teal-50 py-10 flex flex-wrap justify-center gap-6">
            {/* Box 1 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiWorld className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mt-24">Visa Consultation</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mb-16">Get expert advice on the visa process, documentation, and requirements.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>

            {/* Box 2 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiClipboard className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mt-24">Document Assistance</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mb-16">We help you prepare, manage, and organize your documents for visa applications.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>

            {/* Box 3 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiUser className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mt-24">Personalized Guidance</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mb-16">Receive one-on-one support from experienced consultants for a smooth visa process.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>

            {/* Box 4 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiKey className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mb-2 mt-8">Eligibility Check</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mt-2">We assess your eligibility for various visa programs based on your profile.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>

            {/* Box 5 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiLock className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mb-2 mt-8">Secure Application</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mt-2">Ensure your visa application is secure and submitted with all required details.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>

            {/* Box 6 */}
            <div className="relative w-[21rem] h-[17.50rem] bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all hover:translate-y-[-10px]">
                {/* Icon Container */}
                <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <TfiFile className="text-orange-500 text-4xl group-hover:text-white" />
                </div>

                {/* Box Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                    {/* Title Below Icon */}
                    <h3 className="text-3xl font-bold mb-2 mt-8">Application Submission</h3> {/* Reduced margin */}
                    <p className="text-sm text-gray-600 mt-2">Let us submit your completed application to the authorities on your behalf.</p> {/* Added margin-top */}
                </div>

                {/* Bottom Line on Hover */}
                <div className="absolute bottom-0 right-[5.25rem] w-full h-1 bg-orange-500 scale-x-50 group-hover:scale-x-150 transition-all"></div>
            </div>
        </div>
    );
}
