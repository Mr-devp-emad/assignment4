'use client'

import Image from "next/image";
import logo from '@/assets/logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  return (
    <div className="relative">
      {/* Black Banner */}
      <div className="flex bg-black xl:h-[38px] xl:w-screen text-white items-center xs:h-[50px] xs:text-center justify-center">
        <p className="relative xs:text-[12px] xl:text-[15px]">
          Sign up and get 20% off your first order. <u className="cursor-pointer">Sign Up Now</u>
        </p>
        <RxCross2 className="relative hidden lg:block left-[488px]" />
      </div>

      {/* Navbar */}
      <div className="bg-white xl:w-screen xl:h-[120px]">
        <section className="flex relative xl:gap-[40px] xl:h-[100px] items-center xl:ml-[100px] xl:pt-[20px] xs:gap-[20px] xs:h-[50px] xs:left-[20px]">
          {/* Hamburger Menu */}
          <div
            className="relative xl:hidden cursor-pointer"
            onClick={() => setIsHamburgerMenuVisible(!isHamburgerMenuVisible)}
          >
            <GiHamburgerMenu className="h-[20px] w-[20px]" />
            {isHamburgerMenuVisible && (
              <ul className="absolute top-[30px] left-0 bg-white shadow-lg p-4 rounded-md z-20">
                <li className="py-2 hover:text-gray-500">Shop</li>
                <li className="py-2 hover:text-gray-500">On Sale</li>
                <li className="py-2 hover:text-gray-500">New Arrivals</li>
                <li className="py-2 hover:text-gray-500">Brands</li>
              </ul>
            )}
          </div>

          {/* Logo */}
          <Image src={logo} alt="logo" className="xl:w-[200px] xl:h-[25px]" />

          {/* XS Icons */}
          <div className="xl:hidden flex gap-[15px] relative left-[40px]">
            <BiSearch className="cursor-pointer h-[20px] w-[20px]" />
            <BiCart className="cursor-pointer h-[20px] w-[20px]" />
            <CgProfile className="cursor-pointer h-[20px] w-[20px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block relative">
            <ul className="flex relative gap-[40px] items-center cursor-pointer">
              {/* Shop Dropdown */}
              <li
                className="flex items-center relative"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                Shop <MdKeyboardArrowDown />
                {isDropdownVisible && (
                  <ul className="absolute top-[30px] left-0 bg-white shadow-lg p-4 rounded-md z-20">
                    <li className="py-2 hover:text-gray-500">Men</li>
                  </ul>
                )}
              </li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-100 xl:w-[577px] xl:h-[48px] rounded-3xl border-none text-center"
                disabled
              />
              <BiSearch className="absolute xl:ml-[470px] text-gray-400" />
              <BiCart className="xl:h-[30px] xl:w-[30px]" />
              <CgProfile className="xl:h-[30px] xl:w-[30px]" />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
