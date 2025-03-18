import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  // Importing brand icons  

export default function Footer() {  
    return (  
        <footer className="bg-gray-800 text-white py-10">  
          <div className="container mx-auto px-6">  
            <div className="flex flex-col md:flex-row justify-between ">  
              <div className="mb-6 md:mb-0">  
                <h3 className="text-lg font-bold mb-2">Contact Us</h3>  
                <p>Email: info@example.com</p>  
                <p>Phone: (123) 456-7890</p>  
              </div>  
              <div className="mb-6 md:mb-0">  
                <h3 className="text-lg font-bold mb-2">Follow Us</h3>  
                <div className="flex space-x-4">  
                  <a href="#" aria-label="Facebook" className="hover:text-gray-400">  
                    <FontAwesomeIcon icon={faFacebook} size="lg" />  
                  </a>  
                  <a href="#" aria-label="Twitter" className="hover:text-gray-400">  
                    <FontAwesomeIcon icon={faTwitter} size="lg" />  
                  </a>  
                  <a href="#" aria-label="Instagram" className="hover:text-gray-400">  
                    <FontAwesomeIcon icon={faInstagram} size="lg" />  
                  </a>  
                  <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">  
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />  
                  </a>  
                </div>  
              </div>  
             
            </div>  
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">  
              <p>&copy; 2025 Your Company. All rights reserved.</p>  
            </div>  
          </div>  
        </footer>  
    );   
}  