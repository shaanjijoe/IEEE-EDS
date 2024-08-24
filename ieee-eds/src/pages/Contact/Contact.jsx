import React, { useState, useEffect } from "react";
import topimage from '../../assets/topimage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const email = "ieee.eds@iitp.ac.in";
const facebookUrl = "https://www.facebook.com/profile.php?id=61561785816315";
const linkedinUrl = "https://www.linkedin.com/in/ieee-eds-student-chapter-iit-patna-4874a9317/";
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14652.027852575742!2d84.85120883288921!3d25.535753437576226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1721721854443!5m2!1sen!2sin';


const Contact = () => {
  const [showImage, setShowImage] = useState(true);


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
      <div className={`relative w-full ${showImage ? 'h-96' : 'h-0'} transition-all duration-500 ease-in-out overflow-hidden`}>
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
        <p className="mb-4">Email- <a href={`mailto:${email}`} className="text-blue-500">{email}</a></p>
        <p className="mb-4">Address- Department of Electrical Engineering</p>
        <p className="mb-4">Indian Institute of Technology Patna</p>
        <p className="mb-4">Bihta, Patna, Bihar-801106</p>
      </div>

      {/* Social Media Integration Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-6 mb-6">
        <LinkedInPageBox />
        <FacebookPageBox />
      </div>

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

const FacebookPageBox = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mr-2" size="2x" />
          <h2 className="text-2xl font-bold">Our Facebook Page</h2>
        </div>
        <p className="mb-4">
          Like our Facebook page to stay updated with our latest posts, events, and special offers.
        </p>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          Visit Our Page
        </a>
      </div>
    </div>
  );
};

const LinkedInPageBox = () => {
  
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mr-2" size="2x" />
          <h2 className="text-2xl font-bold">Our LinkedIn Page</h2>
        </div>
        <p className="mb-4">
          Connect with us on LinkedIn to stay updated with our latest news, events, and job opportunities.
        </p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          Visit Our Page
        </a>
      </div>
    </div>
  );
};

const GoogleMapIframe = () => {
  return (
    <div className="flex justify-center items-center w-full h-96 px-4 sm:px-12 md:px-24 lg:px-48">
      <iframe
        src={mapUrl}
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
