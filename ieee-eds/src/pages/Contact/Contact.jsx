import React, { useState, useEffect } from "react";
import './contactstyle.css';

const Contact = () => {
  const [showImage, setShowImage] = useState(true);
  const mapUrl = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IIT,%20Bihta%20Kanpa%20Rd,%20Patna,%20Dayalpur%20Daulatpur,%20Bihar%20801106+(IEEE-NTC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    });
  }, []);


  return (
    <div>
      <div className={`hero ${showImage ? "show-image" : ""}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"
          alt="IIT Patna"
        />
        <div className="hero-content">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="info">
        <p>Email- jeeentcchapter@iitp.ac.in</p>
        <p>Address- Department of Electrical Engineering</p>
        <p>Indian Institute of Technology Patna</p>
        <p>Bihta, Patna, Bihar-801106</p>
      </div>

      <CenteredButton text="LinkedIn" link="https://example.com" />

      <GoogleMapIframe/>

      <div className="footer">
      <footer style={{ textAlign: 'center', fontSize: '12px', padding: '20px 0' }}>
      <div>
        IEEE NTC Student Branch Chapter IIT Patna © 2024
      </div>
      <div>
        Developer: SJ
      </div>
    </footer>
      </div>
      </div>
  );
};

const CenteredButton = ({ text, link }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <a href={link} style={{ textDecoration: 'none' }}>
        <button
          style={{
            width: '80vw',
            backgroundColor: '#808080',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          {text}
        </button>
      </a>
    </div>
  );
};


const GoogleMapIframe = () => {
  const url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14652.027852575742!2d84.85120883288921!3d25.535753437576226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1721721854443!5m2!1sen!2sin';
  return (
    <div style={styles.container}>
      <iframe
        src={url}
        style={styles.iframe}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '420px',
  },
  iframe: {
    width: '50%',
    height: '400px',
    border: 'none',
  },
};


export default Contact;
