import React, { useState, useEffect } from 'react';
import topimage from '../../assets/topimage.jpg';
import Convenorimage from '../../assets/images/members/PK_Tiwari_Convener.png';
import Member1 from '../../assets/images/members/Ashraf_Chair.png';
import Member2 from '../../assets/images/members/Prity_Sinha_Secretary.png';
import Member3 from '../../assets/images/members/Sai_Katta_Webmaster.png';
import Member4 from '../../assets/images/members/Subir_Das_Treasurer.png';
import Member5 from '../../assets/images/members/Pushp_Vice_chair.png';
import Speaker1 from '../../assets/images/members/Speaker_Sudeb_Dasgupta.png';
import Speaker2 from '../../assets/images/members/Speaker_Yogendra_Yadav.png';


const Members = () => {
  const [showImage, setShowImage] = useState(true);

  const speakers = [
    {
      image: Speaker1,
      // description: 'Secretary',
      name: 'Prof. Sudeb Dasgupta',
      url: 'https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/',
    },
    {
      image: Speaker2,
      // description: 'Secretary',
      name: 'Mr. Yogendra Yadav',
      url: 'https://www.linkedin.com/in/yogendra-yadav-8642a830/',
    },
    // {
    //   image: 'https://via.placeholder.com/150',
    //   // description: 'Secretary',
    //   name: 'Speaker Three',
    //   url: 'https://www.companythree.com',
    // },
    // {
    //   image: 'https://via.placeholder.com/150',
    //   // description: 'Secretary',
    //   name: 'Speaker Four',
    //   url: 'https://www.companyfour.com',
    // },
    // {
    //   image: 'https://via.placeholder.com/150',
    //   description: 'Secretary',
    //   name: 'Speaker Five',
    //   url: 'https://www.companyfive.com',
    // },
  ];







  const members = [
    {
      image: Member1,
      description: 'Chair',
      name: 'Ashraf Maniyar',
      url: 'https://www.linkedin.com/in/ashraf-maniyar-82845191/',
    },
    {
      image: Member5,
      description: 'Vice-Chair',
      name: 'Pushp Raj',
      url: '',
    },
    {
      image: Member2,
      description: 'Secretary',
      name: 'Prity Sinha',
      url: 'https://www.linkedin.com/in/prity-sinha-485610226/',
    },
    {
      image: Member4,
      description: 'Treasurer',
      name: 'Subir Das',
      url: 'https://www.linkedin.com/in/subir-das-763456150/',
    },
    {
      image: Member3,
      description: 'Web-Master',
      name: 'Sai Shirov Katta',
      url: '',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`relative w-full ${showImage ? 'h-96' : 'h-0'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <img
          src={topimage}
          alt="IIT Patna"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${showImage ? 'transform translate-y-0' : 'transform -translate-y-1/2'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold">Members</h2>
        </div>
      </div>
      {/* <img src={topimage} alt="team" /> */}

      <div className="flex flex-col md:flex-row m-4 md:m-8 md:mt-12 gap-10 md:gap-40 justify-center items-center">
  <img src={Convenorimage} className="w-48 h-48 md:w-64 md:h-64 m-4 ml-0" alt="Convenor" />
  <div className="flex flex-col items-center m-4 text-lg w-full md:w-96">
    <hr className="border-2 border-red-300 w-full" />
    <h2 className="text-gray-600 text-2xl font-semibold m-3">Convener</h2>
    <hr className="border-2 border-red-300 w-full" />
    <h3 className="p-2 font-bold">Dr. P.K. Tiwari</h3>
    <h5 className="p-2 mb-2">Associate Professor, IIT Patna</h5>
    <button className="bg-gray-400 text-black font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-300 w-full">
  <a href="https://www.linkedin.com/in/dr-pramod-kumar-tiwari-54089359/" target="_blank" rel="noopener noreferrer">
    View Profile
  </a>
</button>

  </div>
</div>

      <div className='flex items-center justify-center text-4xl font-bold text-gray-800'>
        Our Keynote Speakers
      </div>

      <SpeakersSection speakers={speakers} />
      <MembersSection members={members} />
      <div className="footer mt-8">
        <footer className="text-center text-sm py-4">
          <div>IEEE NTC Student Branch Chapter IIT Patna © 2024</div>
          <div>Developer: SK</div>
        </footer>
      </div>

    </div>
  );
};

const MembersSection = ({ members }) => {
  return (
    <div className="my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center h-auto w-full">
      <img src={member.image} alt={member.name} className="h-48 w-48 mb-2 object-cover" />
      <div className="font-bold text-lg mb-2 text-center">{member.description}</div>
      <div className=" text-lg mb-2 text-center">{member.name}</div>
      <button
        onClick={() => window.open(member.url, '_blank')}
        className="bg-gray-600 text-white px-6 py-2 rounded mt-auto"
      >
        Linkedin
      </button>
    </div>
  );
};



const SpeakersSection = ({ speakers }) => {
  return (
    <div className="my-8 p-4 max-w-screen-lg mx-auto">
      {/* <h2 className="text-3xl font-bold text-center mb-8"></h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};


const SpeakerCard = ({ speaker }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center h-auto w-full">
      <img src={speaker.image} alt={speaker.name} className="h-48 w-48 mb-2 object-cover" />
      {/* <div className="font-bold text-lg mb-2 text-center">{speaker.description}</div> */}
      <div className="font-bold text-lg mb-2 text-center">{speaker.name}</div>
      <button
        onClick={() => window.open(speaker.url, '_blank')}
        className="bg-gray-600 text-white px-6 py-2 rounded mt-auto"
      >
        Linkedin
      </button>
    </div>
  );
};





export default Members;
