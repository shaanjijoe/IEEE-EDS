import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import topimage from '../../assets/topimage.jpg';
import Logo from '../../assets/Logo.jpeg';
import eventPoster from '../../assets/eventPoster.jpg';

import highlightImage1 from '../../assets/images/event1.jpeg';
import highlightImage2 from '../../assets/images/event2.jpeg';
import highlightImage3 from '../../assets/images/event3.jpeg';
import highlightImage4 from '../../assets/images/event4.jpeg';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Home = () => {
  const images2 = [
    { src: highlightImage1, alt: '1' },
    { src: highlightImage3, alt: '2' },
    { src: highlightImage2, alt: '3' },
    { src: highlightImage1, alt: '4'},
  ];

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

  return <>




<div className={`relative w-full ${showImage ? 'h-96' : 'h-48'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <img
          src={topimage}
          alt="IIT Patna"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${showImage ? 'transform translate-y-0' : 'transform -translate-y-1/2'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold"></h2>
        </div>
      </div>


    
    {/* <div className="text-3xl text-center">IEEE Electron Device Society Student Branch Chapter</div>  */}
    <h2 className="text-3xl font-bold text-center mb-8 mt-10">About us</h2>
    <div className="text-sm m-10 text-justify">
    IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE aims to serve professionals involved in all aspects of the electrical, electronics, and computing fields, as well as related areas of science and technology, by providing the necessary resources for the progression of modern civilization. The IEEE body approved the formation of the IEEE Nanotechnology Council and its field of interest on February 17, 2022. The IEEE Nanotechnology Council supports the advancement and coordination of work in the field of nanotechnology by fostering the theory, design, and development of nanotechnology and its scientific, engineering, and industrial applications. The IEEE Nanotechnology Council is part of the Division of Circuits and Devices, is made up of 23 member societies, and has many chapters. In this student chapter at IIT Patna, we are creating an interactive platform for student members to discuss and collaborate with academicians and industry professionals working in the nanotechnology field. Further, the IEEE NTC student chapter covers a vast variety of topics, including photonics, optoelectronics, photovoltaic, memristive technologies, the Internet of Things, and more. The major aim of this student chapter is to develop young professionals in the recent developments in nanotechnology and to utilize their skills for the welfare of society and humanity.    
    </div>

    
  

    <div className="flex items-center justify-center mt-20 mb-20">
    <div className="flex space-x-10">
      <Link
        to="/events"
        className="inline-flex items-center justify-center border rounded transition border-blue-500 text-black hover:bg-blue-500 hover:text-white px-4 py-2 text-base"
      >
        Upcoming Events
      </Link>
      <a
        href="https://www.google.com"
        className="inline-flex items-center justify-center border rounded transition border-blue-500 text-black hover:bg-blue-500 hover:text-white px-4 py-2 text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </a>
    </div>
  </div>

    
{/* 
    <div className="flex justify-center"><Link to="/events" className="text-3xl font-bold text-center m-10">Upcoming Events</Link></div>
    <div className="flex justify-center"><a href="https://www.google.com">regis</a></div> */}



    <div className="relative w-full h-4/5 bg-gray-100 flex items-center justify-center mb-20">
      <div className="relative z-10 flex justify-center">
        <img className="w-5/6 h-auto mt-20 mb-0" src={eventPoster} alt="Event Poster" />
      </div>
    </div>



    <div className="w-3/4 h-1/4 mx-auto">
        <Carousel
          plugins={[
          Autoplay({
          jump: true,
          delay: 3000,
        }),
        ]}
        className='w-full h-full'
        >
        <CarouselContent >
          {images2.map((image, index) => (
            <CarouselItem className='relative flex items-center justify-center' key={index}>
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center"><img className="flex justify-center h-3/4 w-auto items-center" src={image.src} alt={image.alt} /></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>



      <div className="footer mt-10  bg-gray-100 ">
        <footer className="text-center text-sm py-4">
          <div>IEEE NTC Student Branch Chapter IIT Patna © 2024</div>
          <div>Developer: IG</div>
        </footer>
      </div>

  



    {/* <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-200"></div>
      <div className="relative z-10 flex justify-center">
        <iframe
          className="border-none"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&showTz=0&showPrint=0&src=cjc0OWhrczE4cDM0N3Zva29hdWVpbXJhcjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688"
          style={{ width: '200%', height: '600px' }}
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div> */}

    


    

  </>

};

export default Home;

















// import React, { useState, useEffect } from "react";
// import topimage from '../../assets/topimage.jpg';

// const Home = () => {
//   const [showImage, setShowImage] = useState(true);


//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowImage(false);
//       } else {
//         setShowImage(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <div className={`relative w-full ${showImage ? 'h-80' : 'h-48'} transition-all duration-500 ease-in-out overflow-hidden`}>
//         <img
//           src={topimage}
//           alt="IIT Patna"
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${showImage ? 'transform translate-y-0' : 'transform -translate-y-1/2'}`}
//         />
//         <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
//           <h2 className="text-4xl md:text-6xl font-bold">Sponsors</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


