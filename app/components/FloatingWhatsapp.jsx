"use client"
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => (
    <a
      href="https://wa.me/+919160449000"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <FaWhatsapp size={30} color="white" />
      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 23px;
          left: 20px;
          background-color: #25d366;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          z-index: 9999;
        }
        .whatsapp-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </a>
  );

  export default FloatingWhatsApp;