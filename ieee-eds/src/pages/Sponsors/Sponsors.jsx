import React, { useState, useEffect } from "react";
import topimage from '../../assets/topimage.jpg';

const Sponsors = () => {
  const [showImage, setShowImage] = useState(true);
  const data = [
    {
      sponsorship: 'Gold',
      Perks: ['Feature 1 is longer and descriptive', 'Feature 2 is also detailed and lengthy', 'Feature 3'],
      price: '$1000',
    },
    {
      sponsorship: 'Silver',
      Perks: ['Feature 1', 'Feature 2 with more details'],
      price: '$750',
    },
    {
      sponsorship: 'Bronze',
      Perks: ['Feature 1'],
      price: '$500',
    },
  ];

  const sponsors = [
    {
      image: topimage,
      name: 'Company One',
      url: 'https://www.companyone.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Company Two',
      url: 'https://www.companytwo.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Company Three',
      url: 'https://www.companythree.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Company Four',
      url: 'https://www.companyfour.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Company Five',
      url: 'https://www.companyfive.com',
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`relative w-full ${showImage ? 'h-96' : 'h-48'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <img
          src={topimage}
          alt="IIT Patna"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${showImage ? 'transform translate-y-0' : 'transform -translate-y-1/2'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold">Sponsors</h2>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Banner data={data} />
      </div>

      <div className="container mx-auto p-4">
        <SponsorsSection sponsors={sponsors} />
      </div>

      <BecomeOurSponsors />
    </div>
  );
};

const BecomeOurSponsors = () => {
  const contacts = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1 (123) 456-7890'
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '+1 (987) 654-3210'
    }
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">Become Our Sponsor</h2>
      <div className="text-center mb-8">
        <p>Interested in becoming a sponsor? Contact us through the information below.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
            <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a></p>
            <p>Phone: <a href={`tel:${contact.phone}`} className="text-blue-500">{contact.phone}</a></p>
          </div>
        ))}
      </div>
      <div className="footer mt-8">
        <footer className="text-center text-sm py-4">
          <div>IEEE NTC Student Branch Chapter IIT Patna © 2024</div>
          <div>Developer: SJ</div>
        </footer>
      </div>
    </div>
  );
};

const SponsorsSection = ({ sponsors }) => {
  return (
    <div className="my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center h-auto w-full">
      <img src={sponsor.image} alt={sponsor.name} className="h-48 w-48 mb-2 object-contain" />
      <div className="font-bold text-lg mb-2 text-center">{sponsor.name}</div>
      <button
        onClick={() => window.open(sponsor.url, '_blank')}
        className="bg-gray-600 text-white px-6 py-2 rounded mt-auto"
      >
        Contact Us
      </button>
    </div>
  );
};

const Banner = ({ data }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <div className="grid grid-cols-3 text-center font-bold text-xl mb-4">
        <div>Sponsorship</div>
        <div>Perks</div>
        <div>Price</div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-3 text-center mb-4 p-4 bg-white rounded-lg shadow-md">
          <div className="font-semibold flex items-center justify-center">{item.sponsorship}</div>
          <div className="space-y-2 text-left pl-4">
            {item.Perks.map((perk, i) => (
              <div key={i} className="text-sm list-disc list-inside">{perk}</div>
            ))}
          </div>
          <div className="font-semibold flex items-center justify-center">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
