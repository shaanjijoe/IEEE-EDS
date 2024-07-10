import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom";
import topimage from './images/topimage.jpg';
import eventPoster from './images/eventPoster.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const Home = () => {
  return <>
    <div>navbar</div>
    <img src={topimage} alt="team" />
    <div className="text-center">IEEE Electron Device Society Student Branch Chapter</div> 
    <div className="text-center">About us</div>
    <div className="text-xs">
      IEEE IS THE WORLD'S LARGEST TECHNICAL PROFESSIONAL ORGANIZATION DEDICATED TO ADVANCING TECHNOLOGY FOR THE BENEFIT OF HUMANITY. IEE AIMS TO SERVE PROFESSIONALS INVOLVED IN ALL ASPECTS OF THE ELECTRICAL, ELECTRONI9CS AND COMPUTING FIELDS AND RELATED AREAS OF SCIENCE AND TECHNOLOGY WITH THE NECESSARY RESOURCES FOR THE PROGRESSION OF MODERN CIVILIZATION. THE IEEE BODY APPROVED THE FORMATION OF THE IEEE NANOTECHNOLOGY COUNCIL AND ITS FIELD OF INTEREST ON FEBRUARY 17, 2022. THE IEEE NANOTECHNOLOGY COUNCIL SUPPORTS THE ADVANCEMENT AND COORDINATION OF WORKS IN THE FIELD OF NANOTECHNOLOGY BY SUPPORTING THE THEORY, DESIGN AND DEVELOPMENT OF NANOTECHNOLOGY AND ITS SCIENTIFIC, ENGINEERING, AND INDUSTRIAL APPLICATION. THE IEEE NANOTECHNOLOGY COUNCIL IS PART OF THE DIVISION- CIRCUITS AND DEVICES AND IS MADE UP OF 23 MEMBER SOCIETIES AND HAS MANY CHAPTERS. IN THIS STUDENT CHAPTER, WE AT IIT PATNA IS TRYING TO CREATE AN INTERACTIVE PLATFORM FOR THE STUDENT MEMBERS TO DISCUSS AND COLLABORATE WITH THE ACADEMICIANS AND INDUSTRY PROFESSIONAL WHO ARE WORKING IN THE NANOTECHNOLOGY FIELD. FURTHER, THE IEEE NTC STUDENT CHAPTER COVERS A VAST VARIETY OF TOPICS CONSISTING OF PHOTONICS, OPTOELECTRONICS, PHOTOVOLTAIC, MEMRISTIVE TECHNOLOGIES, THE INTERNET OF THINGS, AND SO ON. THE MAJOR AIM OF THIS STUDENT CHAPTER IS TO DEVELOP THE  YOUNG PROFESSIONALS TOWARDS THE RECENT DEVELOPMENT IN NANOTECHNOLOGY AND UTILIZE THERE SKILLS FOR THE WELFARE OF SOCIETY AND HUMANITY.
    </div>
    <div className="flex justify-center"><Link to="/events" className="text-center">Upcoming Events</Link></div>
    <div className="flex justify-center"><a href="https://www.google.com">regis</a></div>
    <div className="flex justify-center "><img className=" w-1/2 h-1/2 " src={eventPoster}></img></div>
    <div className="w-3/4 mx-auto">
      <Carousel plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        <CarouselItem><img src={topimage} alt="team" /></CarouselItem>
        <CarouselItem><img src={topimage} alt="team" /></CarouselItem>
        <CarouselItem><img src={topimage} alt="team" /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext /></Carousel>
    </div>
    <div className="flex justify-center">
      <iframe
        className="border-none"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&showTz=0&showPrint=0&src=cjc0OWhrczE4cDM0N3Zva29hdWVpbXJhcjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688"
        style={{ width: "75%", height: "600px" }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
    

  </>

};

export default Home;
