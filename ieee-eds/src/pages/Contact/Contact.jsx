import React, { useState, useEffect } from "react";
import topimage from '../../assets/topimage.jpg';

const Contact = () => {
  const [showImage, setShowImage] = useState(true);
  const mapUrl = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IIT,%20Bihta%20Kanpa%20Rd,%20Patna,%20Dayalpur%20Daulatpur,%20Bihar%20801106+(IEEE-NTC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Hero Section */}
      <div className={`relative w-full ${showImage ? 'h-80' : 'h-48'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <img
          src={topimage}
          alt="IIT Patna"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${showImage ? 'transform translate-y-0' : 'transform -translate-y-1/2'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold">Contact Us</h2>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full p-6 mt-6 text-center bg-gray-100">
        <p className="mb-4">Email- <a href="mailto:jeeentcchapter@iitp.ac.in" className="text-blue-500">jeeentcchapter@iitp.ac.in</a></p>
        <p className="mb-4">Address- Department of Electrical Engineering</p>
        <p className="mb-4">Indian Institute of Technology Patna</p>
        <p className="mb-4">Bihta, Patna, Bihar-801106</p>
      </div>

      {/* Centered Button */}
      <CenteredButton text="LinkedIn" link="https://example.com" />

      {/* Google Map Iframe */}
      <GoogleMapIframe />

      {/* Footer */}
      <footer className="text-center text-sm py-5 bg-gray-200 w-full mt-6">
        <div>IEEE NTC Student Branch Chapter IIT Patna © 2024</div>
        <div>Developer: SJ</div>
      </footer>
    </div>
  );
};

const CenteredButton = ({ text, link }) => {
  return (
    <div className="flex justify-center mt-6 mb-6">
      <a href={link} className="text-decoration-none">
      <button className="w-full max-w-screen-md mx-4 bg-gray-600 text-white py-2 px-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
        {text}
      </button>

      </a>
    </div>
  );
};

const GoogleMapIframe = () => {
  const url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14652.027852575742!2d84.85120883288921!3d25.535753437576226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1721721854443!5m2!1sen!2sin';
  return (
    <div className="flex justify-center items-center w-full h-96 pl-48 pr-48">
      <iframe
        src={url}
        className="w-full h-full border-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Contact;
