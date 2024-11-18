"use client"

import Brands from "@/components/Brands";
import Dress from "@/components/Dress";
import Hero from "@/components/Hero";
import Last from "@/components/Index";


import NewArrival from "@/components/NewArrival";
import TSelling from "@/components/TSelling";


export default function Home() {
  return (
   <div className="relative overflow-hidden w-screen">
      
      <Hero />
      <Brands />
      <NewArrival />
      <TSelling />
      <Dress />
      <Last/>
    
   </div>
  );
}
