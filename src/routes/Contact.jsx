import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeadset, faEnvelopeOpenText, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-28">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white relative shadow-lg rounded-lg p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-10">
                  <div>
                    <h3 className="text-black text-4xl font-semibold mb-2">Contact Us</h3>
                    <p className="text-black text-sm mb-8">
                      Feel free to contact us any time. We will get back to you as soon as we can!
                    </p>
                    <input type="text" className="form-control mb-4 w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Name" />
                    <input type="text" className="form-control mb-4 w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Email" />
                    <textarea className="form-control mb-4 w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Message" rows="4"></textarea>
                    <button className="w-full bg-gradient-to-tr from-[#481A54] to-purple-600 text-white py-3 rounded-full text-sm font-semibold">
                      Send
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col justify-end">
                  <ul className="flex space-x-4">
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="lg" className="text-white" /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" className="text-white" /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" className="text-white" /></a></li>
                  </ul>
                </div>
              </div>
              {/* Contact Info Section */}
              <div className="max-md:hidden bg-gray-800 text-white rounded-l-lg absolute right-0 top-1/4 p-10 w-80">
                <h4 className="pb-4">Contact Info</h4>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon icon={faHeadset} size="lg" className="mr-4" />
                  <span>+2349030038597</span>
                </div>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" className="mr-4" />
                  <span>info@wisdom.com</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className="mr-4" />
                  <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Contact Info Section */}
          <div className="md:hidden bg-gray-800 text-white mt-5 p-10 w-full">
            <h4 className="pb-4">Contact Info</h4>
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faHeadset} size="lg" className="mr-4" />
              <span>+2349030038597</span>
            </div>
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" className="mr-4" />
              <span>info@wisdom.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className="mr-4" />
              <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="container mx-auto py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h4 className="text-black">Find Us on Google Map</h4>
            <p className="text-black text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.
            </p>
            <div className="rounded-lg overflow-hidden mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
