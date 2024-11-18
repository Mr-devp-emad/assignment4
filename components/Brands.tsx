"use client"

import Image from "next/image"
import companyLogo1 from "@/assets/companyLogo1.png"
import companyLogo2 from "@/assets/companyLogo2.png"
import companyLogo3 from "@/assets/companyLogo3.png"
import companyLogo4 from "@/assets/companyLogo4.png"
import companyLogo5 from "@/assets/companyLogo5.png"

const Brands = () => {
  return (
    <div className="xl:flex xl:w-screen xl:h-[144px] bg-black  relative xl:items-center xl:gap-[100px] xs:gap-[50px] xl:justify-center xs:flex xs:items-center xs:justify-center xs:flex-wrap xs:pt-[20px] xs:pb-[20px]">
      <Image src={companyLogo1} alt="brand"  className="xl:w-[150px] xl:h-[50px] xs:w-[70px] xs:h-[40]"/>
      <Image src={companyLogo2} alt="brand"  className="xl:w-[150px] xl:h-[50px] xs:w-[70px] xs:h-[40]"/>
      <Image src={companyLogo3} alt="brand"  className="xl:w-[150px] xl:h-[50px] xs:w-[70px] xs:h-[40]"/>
      <Image src={companyLogo4} alt="brand"  className="xl:w-[150px] xl:h-[50px] xs:w-[70px] xs:h-[40]"/>
      <Image src={companyLogo5} alt="brand"  className="xl:w-[200px] xl:h-[50px] xs:w-[150px] xs:h-[40]"/>
      
    </div>
  )
}

export default Brands
