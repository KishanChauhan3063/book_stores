import React from 'react';
import { FaYoutube, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
 return (
   <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
     <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
       <div>
         <h6 className="font-bold uppercare pt-2">Book Type</h6>
         <ul>
           <li className="py-1">Fantasy</li>
           <li className="py-1">Horror</li>
           <li className="py-1">Science Fiction</li>
           <li className="py-1">Romance</li>
           <li className="py-1">Classics </li>
         </ul>
       </div>
       <div>
         <h6 className="font-bold uppercare pt-2">Magazines Type</h6>
         <ul>
           <li className="py-1">Cultural magazines</li>
           <li className="py-1">Flash magazines</li>
           <li className="py-1">Sports magazines</li>
           <li className="py-1">Art magazines</li>
           <li className="py-1">Educational magazine</li>
         </ul>
       </div>
       <div className="col-span-2 py-8 md:pt-2">
         <p className="font-bold uppercase">Subscribe to our newsletters</p>
         <p className="py-4">
           The Latest deals, articles and resources sent to your inbox weekly.
         </p>
         <form className="flex flex-col sm:flex-row">
           <input
             className="w-full p-2 mr-4 rounded-md mb-4"
             type="email"
             placeholder="Enter email.."
           />
           <button className="p-2 mb-4 rounded-md">Subscribe</button>
         </form>
       </div>
     </div>

     <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
       <p className="py-4">2022 Experiences, LLC. All rights reserved</p>
       <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
         <FaYoutube className="text-red-600 text-4xl" />
         <FaWhatsapp className="text-green-600 text-4xl" />
         <FaFacebook className="text-blue-600 text-4xl" />
         <FaInstagram className="text-pink-600 text-4xl" />
         <FaTwitter className="text-blue-400 text-4xl" />
         <FaLinkedin className="text-blue-800 text-4xl" />
       </div>
     </div>
   </div>
 );
};

export default Footer;
