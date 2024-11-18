'use client'

import Image from 'next/image'
import Kuple from '@/assets/Kuple.png'
import effect1 from '@/assets/effect1.png'
import effect2 from '@/assets/effect2.png'

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1] w-screen px-4 xl:px-[100px] py-[50px] xl:py-[130px] relative">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center">
        {/* Left Section */}
        <div className="text-center xl:text-left xl:w-1/2 space-y-6">
          <h1 className="font-bold text-3xl xl:text-[64px] xl:leading-[70px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm xl:text-base text-gray-700">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-4 bg-black text-white rounded-full w-[200px] h-[50px]">
            Shop Now
          </button>

          {/* Popularity Stats */}
          <div className="mt-8 flex justify-center xl:justify-start space-x-8">
            <div>
              <p className="text-2xl font-semibold">200+</p>
              <span className="text-gray-600">International brands</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">2,000+</p>
              <span className="text-gray-600">High-Quality Products</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">30,000+</p>
              <span className="text-gray-600">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 xl:mt-0 xl:w-1/2 flex justify-center">
          {/* Model Image */}
          <Image
            src={Kuple}
            alt="fashion"
            className="w-[300px] xl:w-[10000px] z-10"
          />
          {/* Effect1 */}
          <Image
            src={effect1}
            alt="effect1"
            className="absolute top-0 right-[1%] w-[50px] xl:w-[100px]"
          />
          {/* Effect2 */}
          <Image
            src={effect2}
            alt="effect2"
            className="absolute bottom-[10%] left-[15%] w-[40px] xl:w-[70px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
