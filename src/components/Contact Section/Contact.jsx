import React from 'react';
import './Contact.css';
import { GrInstagram } from "react-icons/gr";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

// Modal Component
function Modal({ show, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span>{message}</span>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de045ea2-b390-49ff-99bf-65be8d0a31a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id='contact' className='contact section container'>
      <div className="sectionTitle">
        <h5 className="titleText">Contact Me <div className="underline"><span></span></div></h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>
          <div className="cards grid">
            <div className="card">
              <div>
                <FaLinkedin className='icon instaIcon'/>
              </div>
              <h4>Linkedin</h4>
              <span className='userName'>@devanshimodi3112</span>
              <div>
                <a className='flex' href="https://www.linkedin.com/in/devanshi-modi-89795a282/" target="blank">
                  Send Message <BsFillArrowRightSquareFill className="icon"/>
                </a>
              </div>
            </div>

          <div className="card">
            <div>
            <FaPhoneAlt className='icon instaIcon' />
            </div>
            <h4>Contact Number</h4>
            <span className='userName'>Devanshi Modi</span>
            <div>
              <a className='flex' href="tel:+91 9904856683">
                Call Now <BsFillArrowRightSquareFill className="icon" />
              </a>
            </div>
          </div>
             
            <div className="card">
              <div>
                <GrInstagram className='icon instaIcon'/>
              </div>
              <h4>Instagram</h4>
              <span className='userName'>devanshimodi_31</span>
              <div>
                <a className="flex" href="https://www.instagram.com/devanshimodi_31/" target='blank'>
                  Send Message <BsFillArrowRightSquareFill className='icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter your Name" name="Name" required/>
            <input type="email" placeholder='Enter your email address' name="Email" required/>
            <input type="text" placeholder='Subject' name="subject" required/>
            <textarea name='message' placeholder='Enter your message' required></textarea>
            <button className='formBtn' type='submit' name='submit'>Send Email</button>
          </form>
          {/* <span>{results}</span> */}
        </div>
      </div>
      <Modal show={showModal} message={result} onClose={closeModal} />
    </section>
  );
}

export default Contact;
