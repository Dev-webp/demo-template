import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-5 text-center md:text-left border-b border-gray-700 mb-10">
        {/* Grid for Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Navigation */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Navigation</h3>
                <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
                    <li><a href="#" className="hover-underline">Home</a></li>
                    <li><a href="#" className="hover-underline">About Us</a></li>
                    <li><a href="#" className="hover-underline">Our Services</a></li>
                    <li><a href="#" className="hover-underline">Contact</a></li>
                </ul>
            </div>
            {/* Services */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Services</h3>
                <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
                    <li><a href="#" className="hover-underline">Study Visa Consultation</a></li>
                    <li><a href="#" className="hover-underline">Visa Application Assistance</a></li>
                    <li><a href="#" className="hover-underline">Immigration Advice</a></li>
                    <li><a href="#" className="hover-underline">Resume Marketing</a></li>
                </ul>
            </div>
            <div>
    <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Our Expertise</h3>
    <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
        <li><a href="#" className="hover-underline">Immigration Support</a></li>
        <li><a href="#" className="hover-underline">Career Counseling for Students</a></li>
        <li><a href="#" className="hover-underline">Work Permit Guidance</a></li>
        <li><a href="#" className="hover-underline">Skill Assessment Assistance</a></li>
    </ul>
</div>

                
            {/* Social Media */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase text-center">Follow Us</h3>
                <div className="flex space-x-4 text-center justify-center">
                    <a href="#" className="group">
                        <FaFacebook className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaTwitter className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaInstagram className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaLinkedin className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaYoutube className="text-white group-hover:text-orange-500" />
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start mb-6 md:mb-0 mt-10 w-full md:w-auto ml-0 tablet:ml-20 md:ml-0 lg:ml-0">
            <p className="text-gray-300 font-semibold">Email : <a href="mailto:info@vjcoverseas.com" className="hover:text-saffron">info@vjcoverseas.com</a></p>
            <p className="mt-2 font-semibold text-gray-300 ml-0 tablet:ml-2 md:ml-0 lg:ml-0">CONTACT : <a href="tel:+919160449000" className="hover:text-saffron">+91 9160449000</a></p>
          </div>
            </div>
        </div>

       
    </div>

    <div className="container mx-auto px-6 md:px-12 ">
        {/* Address and Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
             {/* Hyderabad Address */}
        <div className="mb-8 md:mb-0 text-center md:w-1/3">
            <h3 className="text-lg font-bold uppercase mb-2 text-orange-500">VJC Overseas (Hyderabad)</h3>
            <p>62/A, Ground Floor,</p>
            <p>Sundari Reddy Bhavan, Fresh Mart,</p>
            <p>Vengalrao Nagar, Sanjeeva Reddy Nagar,</p>
            <p>Hyderabad, Telangana, 500038</p>
            {/* Google Map */}
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7547877659777!2d78.44687711507425!3d17.438545988039776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9d0c75cd3%3A0x77c7f23e8a49a2d6!2sSanjeeva%20Reddy%20Nagar%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1609591824253!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>

           {/* USA Address */}
        <div className="flex flex-col items-center md:w-1/3">
            <h3 className="text-lg font-bold uppercase mb-2 text-orange-500">VJC Overseas (USA)</h3>
            <p>7200 Preston Rd, Plano,</p>
            <p>TX 75024, USA</p>
            <p className="mt-2 font-semibold">
                <a href="tel:+13322012159" className="flex items-center space-x-2 hover:text-saffron">
                    <FaWhatsapp size={25} /> 
                    <span>: +1 3322012159</span>
                </a>
            </p>
            {/* Google Map */}
            <div className="mt-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.4415885439596!2d-96.80493858487804!3d33.06426432985971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c195e7a517c81%3A0x76e1da09818e11a7!2s7200%20Preston%20Rd%2C%20Plano%2C%20TX%2075024%2C%20USA!5e0!3m2!1sen!2sin!4v1609591907834!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>

        {/* Bangalore Address */}
        <div className="mb-8 md:mb-0 text-center md:w-1/3">
            <h3 className="text-lg font-bold uppercase mb-2 text-orange-500">VJC Overseas (Bangalore)</h3>
            <p>16 & 17, Ground Floor,</p>
            <p>Raheja Arcade,</p>
            <p>5th Block, Koramangala,</p>
            <p>Bangalore, India, 560095</p>
            {/* Google Map */}
            <div className="mt-4 tablet:mt-20 lg:mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.695142720451!2d77.6166214150411!3d12.935175190879746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c3ad0cc183%3A0x65c2d7b95c7a8e13!2sRaheja%20Arcade%2C%20Koramangala%205th%20Block%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1609591965873!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>
        </div>

         {/* Copyright Section */}
         <div className="border-t border-gray-700 pt-6 flex flex-col items-center space-y-4 mt-4">
            <p>&copy; 2024 VJC Overseas. All Rights Reserved.</p>
            {/* <button
                className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Book Free Consultation
            </button> */}
        </div>

        {/* Call to Action & Email Section */}
        {/* <div className="flex flex-col md:flex-row justify-between mt-8 space-x-6 items-center md:items-start ml-0 lg:ml-10">
          
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto">
            <p className="text-gray-300">Email: <a href="mailto:info@vjcoverseas.com" className="hover:text-saffron">info@vjcoverseas.com</a></p>
            <p className="mt-2 font-semibold text-gray-300">CONTACT: <a href="tel:+919160449000" className="hover:text-saffron">+91 9160449000</a></p>
          </div>

          
          <Link href="#form" passHref>
            <button className="bg-saffron text-black font-semibold py-2 px-6 mr-4 lg:mr-0 ml-0 lg:ml-0 rounded-lg hover:bg-black hover:text-white transition uppercase mb-6 md:mb-0">
              Book Free Consultation
            </button>
          </Link>

          
          <div className="flex space-x-6 justify-center md:justify-start w-full md:w-auto">
            <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/vjcoverseas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/vjc_overseas_bangalore/?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/vjc-overseas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@vjcoverseas9434" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaYoutube size={24} />
            </a>
          </div>
        </div> */}
        </div>
</footer>

    </>
  );
};

export default Footer;
