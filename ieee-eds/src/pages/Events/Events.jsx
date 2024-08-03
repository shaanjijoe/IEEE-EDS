import React from "react";
import Slider from "react-slick";
import headerImage from '../../assets/images/topimage.jpg';
import pastEventImage1 from '../../assets/images/inauguration.jpeg';
import pastEventImage2 from '../../assets/images/guest_talk_prof_sudeb_dasgupta.jpeg';
import highlightImage1 from '../../assets/images/event1.jpeg';
import highlightImage2 from '../../assets/images/event2.jpeg';
import highlightImage3 from '../../assets/images/event3.jpeg';
import highlightImage4 from '../../assets/images/event4.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "One Day Workshop on Characterisation of Semiconductor Devices with Keithely 4200 Parameters Analyser",
    date: "July 26, 2024",
    time: "12:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    registrationLink: "Registration link",
  },
  {
    title: "Guest Talk by Dr. Prof. Gopi (NIT Calicut)",
    date: "July 26, 2024",
    time: "12:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    registrationLink: "Registration Link",
  },
];

const pastEvents = [
  {
    image: pastEventImage1,
    name: "Inauguration + Guest Talk by Mr. Yogendra Yadav (TSMC) (Online)",
    date: "June 30, 2024",
  },
  {
    image: pastEventImage2,
    name: "Guest Talk by Prof. Sudeb Dasgupta (IIT Roorkee) (Offline)",
    date: "July 5, 2024",
  }
];

const highlightImages = [
  highlightImage1,
  highlightImage2,
  highlightImage3,
  highlightImage4,
];

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 w-10 h-10 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="text-2xl">&gt;</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 w-10 h-10 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="text-2xl">&lt;</span>
    </div>
  );
};

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const highlightSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className="relative">
        <img src={headerImage} alt="Header Background" className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Events</h1>
        </div>
      </div>
      <div className="mt-8 text-center p-5">
        <h2 className="text-3xl font-semibold mb-5">Upcoming Events</h2>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow mx-3">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date} at {event.time}</p>
              <p className="text-gray-700 mt-3 px-20">{event.description}</p>
              <a
                href={event.registrationLink}
                className="mt-4 inline-block text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register here
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-12 p-5">
        <h2 className="text-3xl font-semibold mb-5 text-center">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={event.image} alt={event.name} className="w-full h-100 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 p-5">
        <h2 className="text-3xl font-semibold mb-5 text-center">Highlights from the Inauguration + Guest Talk by Mr. Yogendra Yadav</h2>
        <div className="relative px-4 py-8">
          <Slider {...highlightSettings}>
            {highlightImages.map((image, index) => (
              <div key={index} className="relative">
                <div className="w-full h-[400px] md:h-[600px] overflow-hidden"> {/* Fixed height and width */}
                  <img src={image} alt={`Highlight ${index + 1}`} className="w-full h-full object-contain" /> {/* Maintain aspect ratio */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="footer mt-8">
        <footer className="text-center text-sm py-4">
          <div>IEEE NTC Student Branch Chapter IIT Patna © 2024</div>
          <div>Developer: TB</div>
        </footer>
      </div>
    </div>
  );
};

export default Events;