"use client";
import Image from "next/image";
import casual from "@/assets/casual.png";
import formal from "@/assets/formal.png";
import party from "@/assets/party.png";
import gym from "@/assets/gym.png";

const Dress = () => {
  return (
    <div className="relative xl:mt-[40px] flex justify-center items-center">
      {/* Box */}
      <div className="relative xl:w-[1239px] xl:rounded-2xl bg-[#F0F0F0] p-8">
        {/* Heading */}
        <div className="relative flex justify-center items-center mb-8">
          <h1 className="xl:text-[48px] font-extrabold uppercase text-center">
            Browse By Dress Style
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Casual */}
          <div className="relative rounded-xl overflow-hidden bg-white">
            <Image src={casual} alt="Casual" className="object-cover w-full h-[289px]" />
            <h1 className="absolute text-[36px] font-semibold text-black top-4 left-8">Casual</h1>
          </div>

          {/* Formal */}
          <div className="relative rounded-xl overflow-hidden bg-white">
            <Image src={formal} alt="Formal" className="object-cover w-full h-[289px]" />
            <h1 className="absolute text-[36px] font-semibold text-black top-4 left-8">Formal</h1>
          </div>

          {/* Party */}
          <div className="relative rounded-xl overflow-hidden bg-white">
            <Image src={party} alt="Party" className="object-cover w-full h-[289px]" />
            <h1 className="absolute text-[36px] font-semibold text-black top-4 left-8">Party</h1>
          </div>

          {/* Gym */}
          <div className="relative rounded-xl overflow-hidden bg-white">
            <Image src={gym} alt="Gym" className="object-cover w-full h-[289px]" />
            <h1 className="absolute text-[36px] font-semibold text-black top-4 left-8">Gym</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dress;
