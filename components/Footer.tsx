"use client"

import { FaApplePay, FaCcPaypal, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";


export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] text-black py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold xl:font-extrabold text-lg  text-black xl:text-4xl uppercase">Shop.co</h3>
          <p className="mt-4 text-gray-400">
            We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
          </p>



          {/* Social Media */}

          <div className="relative flex xl:justify-start xl:items-center mt-[80px]">
              <div className="gap-[15px] flex justify-start">
                  <FaFacebook className="size-[30px] "/>
                  <FaTwitter className="size-[30px] "/>
                  <FaInstagram className="size-[30px] "/>
                  <FaGithub className="size-[30px] "/>
              </div>
          </div>










          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-800 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Help</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Free eBooks</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Development Tutorial</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">How-to Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>



      <hr className="mt-[20px]"/>


        
      <div className="xl:mt-12 text-left xl:ml-[350px] text-gray-400 xs:text-center">
        © 2000-2023, Shop.co, All Rights Reserved
      </div>


    
      {/* Payment Method */}
        <div className="relative flex justify-end xl:-top-[30px] xs:top-[30px]">

              {/* methods */}
          <div className="gap-[20px] flex pr-[50px]">
          <RiVisaLine className="size-[50px] text-blue-800"/>
          <RiMastercardFill className="size-[50px] text-red-600"/>
          <FaCcPaypal className="size-[50px] text-blue-600"/>
          <FaApplePay className="size-[50px] text-black"/>

          </div>

        </div>
    </footer>
  );
}
