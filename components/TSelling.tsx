"use client";

import Image from "next/image";
import TPS1 from "@/assets/TPS1.png";
import TPS2 from "@/assets/TPS2.png";
import TPS3 from "@/assets/TPS3.png";
import TPS4 from "@/assets/TPS4.png";

import { MdStarHalf, MdStarRate } from "react-icons/md";

const TSelling = () => {
  return (
    <div className="relative xl:pt-[100px] xl:pb-[100px] xl:pl-[100px] xl:pr-[100px] xs:pt-[50px] xs:pb-[50px] xs:pr-[50px] pl-[50px]">
      {/* Heading */}
      <div className="relative flex justify-center items-center">
        <h1 className="uppercase font-extrabold xl:text-[48px]">Top Selling</h1>
      </div>

      {/* TPS  */}

      <div className="flex relative justify-center top-[50px] xl:gap-[50px] xs:gap-[20px]">
        {/* TPS1 */}
        <div className="xl:flex xl:flex-col xs:flex xs:flex-wrap xl:gap-[20px] ">
          <Image src={TPS1} alt="TPS1" className="rounded-lg "/>
          <h1 className="text-xl xs:text-[16px] font-bold">VERTICAL STRIPED SHIRT</h1>

          {/* details */}
          <div className="xl:w-[150px] xl:flex xl:flex-col">
            {/* rating */}
            <div className="flex items-center">
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />

              <span
                className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}
              >
                5.0/5
              </span>
            </div>

            {/* Pricing */}

            <div className="xl:flex ">
              <div className="flex xl:gap-[30px] xs:gap-[5px] items-center">
                <h2 className="xl:text-[40px]">$212</h2>

                <h2 className="xl:text-[30px] line-through text-gray-500">
                  $232
                </h2>
                <span className="xl:text-red-600 bg-red-300 rounded-lg">
                  {" "}
                  -20%{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TPS2 */}
        <div className="xl:flex xl:flex-col xs:flex xs:flex-wrap xl:gap-[20px]">
          <Image src={TPS2} alt="TPS2" className="rounded-lg" />
          <h1 className="text-xl font-bold xs:text-[16px]">COURAGE GRAPHIC T-SHIRT</h1>

          {/* details */}
          <div className="xl:w-[150px] xl:flex xl:flex-col ">
            {/* rating */}
            <div className="flex items-center">
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />

              <span
                className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}
              >
                4.0/5
              </span>
            </div>
            <h2 className="xl:text-[40px]">$145</h2>
          </div>
        </div>

        {/* TPS3 */}

        <div className="xl:flex xl:flex-col xl:gap-[20px] xs:hidden">
          <Image src={TPS3} alt="TPS3" className="rounded-lg" />
          <h1 className="text-xl font-bold ">LOOSE FIT BERMUDA SHORTS</h1>

          {/* details */}
          <div className="xl:w-[150px] xl:flex xl:flex-col ">
            {/* rating */}
            <div className="flex items-center">
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />

              <span
                className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}
              >
                3.0/5
              </span>
            </div>
            <h2 className="xl:text-[40px]">$80</h2>
          </div>
        </div>

        {/* TPS4 */}
        <div className="xl:flex xl:flex-col xl:gap-[20px] xs:hidden">
          <Image src={TPS4} alt="TPS4" className="rounded-lg" />
          <h1 className="text-xl font-bold">FADED SKINNY JEANS</h1>

          {/* details */}
          <div className="xl:w-[150px] xl:flex xl:flex-col">
            {/* rating */}
            <div className="flex items-center">
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarRate className="text-yellow-500" />
              <MdStarHalf className="text-yellow-500" />
              <span
                className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}
              >
                4.5/5
              </span>
            </div>
            <h2 className="xl:text-[40px]">$210</h2>
          </div>
        </div>
      </div>
      {/* View All */}
      <div className="relative flex justify-center items-center xl:top-[70px] xs:top-[20px]">
        <button className="relative xl:w-[218px] xl-h-[52px] border rounded-full  xs:w-[358px] xs:h-[46px] xs:mt-[100px]">
          View All
        </button>
      </div>
    </div>
  );
};

export default TSelling;
