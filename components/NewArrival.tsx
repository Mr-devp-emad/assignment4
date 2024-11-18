"use client"


import Image from "next/image"
import product1 from "@/assets/product1.png"
import product2 from "@/assets/product2.png"
import product3 from "@/assets/product3.png"
import product4 from "@/assets/product4.png"
import { MdStarHalf, MdStarRate } from "react-icons/md"
// import rating from "@/assets/rating.png"


const NewArrival = () => {
  return (
    <div className="relative xl:pt-[100px] xl:pb-[100px] xl:pl-[100px] xl:pr-[100px] xs:pt-[50px] xs:pb-[50px] xs:pr-[50px] pl-[50px]">

      {/* Heading */}
      <div className="relative xl:flex xl:justify-center xs:text-center">

        <h1 className="relative xl:text-4xl xl:font-extrabold uppercase xs:text-[32px] xs:font-extrabold">New Arrivals</h1>
      </div>

        {/* Products */}

        <div className=" relative xl:gap-[100px] xl:pt-[50px] xl:justify-center xs:pt-[20px]">
            <div className="flex gap-[50px] justify-center">
          {/* Product 1 */}
          <div className="xl:flex xl:flex-col xl:gap-[20px]">
            <Image src={product1} alt="product1"  className="rounded-lg"/>
            <h1 className="text-xl font-bold">T-shirts with tape Details</h1>

                {/* details */}
                <div className="xl:w-[150px] xl:flex xl:flex-col ">
                   

                    {/* rating */}
                    <div className="flex items-center">
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarHalf className="text-yellow-500"/>
                    <span className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}>4.5/5</span>


                    </div>
                    <h2 className="xl:text-[40px]">$120</h2>
                </div>

            </div>

            {/* Product2 */}
            <div className="xl:flex xl:flex-col xs:flex xs:flex-wrap xl:gap-[20px]">
            <Image src={product2} alt="product2"  className="rounded-lg"/>
            <h1 className="text-xl font-bold">Skinny Fit jeans </h1>

                {/* details */}
                <div className="xl:w-[150px] xl:flex xl:flex-col">
                    

                    {/* rating */}
                    <div className="flex items-center">
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarHalf className="text-yellow-500"/>
                    <span className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}>3.5/5</span>


                    </div>

                    {/* Pricing */}
                    
                    <div className="xl:flex ">
                      <div className="flex xl:gap-[30px] xs:gap-[5px] items-center">
                    <h2 className="xl:text-[40px]">$240</h2>
                    
                    <h2 className="xl:text-[30px] line-through text-gray-500">$260</h2>
                    <span className="xl:text-red-600 bg-red-300 rounded-lg"> -20% </span>
                    </div>
                    </div>


                </div>

            </div>

              {/* Product3 */}
              <div className="xl:flex xl:flex-col xl:gap-[20px] xs:hidden">
            <Image src={product3} alt="product3"  className="rounded-lg"/>
            <h1 className="text-xl font-bold">Checkered Shirt</h1>

                {/* details */}
                <div className="xl:w-[150px] xl:flex xl:flex-col">
                   

                    {/* rating */}
                    <div className="flex items-center">
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarHalf className="text-yellow-500"/>
                    <span className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}>4.5/5</span>


                    </div>
                    <h2 className="xl:text-[40px]">$180</h2>
                </div>

            </div>

            {/* Product4 */}

            <div className="xl:flex xl:flex-col xl:gap-[20px] xs:hidden">
            <Image src={product4} alt="product4"  className="rounded-lg"/>
            <h1 className="text-xl font-bold">Sleeve Stripped T-shirt</h1>

                {/* details */}
                <div className="xl:w-[150px] xl:flex xl:flex-col">
                    

                    {/* rating */}
                    <div className="flex items-center">
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarRate className="text-yellow-500"/>
                    <MdStarHalf className="text-yellow-500"/>
                    <span className={`ml-[10px] ${true ? "text-gray-500" : "text-black"}`}>4.5/5</span>


                    </div>

                    {/* Pricing */}
                    <div className="xl:flex xl:gap-[30px] items-center">
                    <h2 className="xl:text-[40px]">$130</h2>
                    <h2 className="xl:text-[30px] xl:line-through xl:text-gray-500">$160</h2>
                    <span className="xl:text-red-600 xl:bg-red-300 xl:rounded-lg"> -30% </span>
                    </div>
                </div>

            </div>

              
        </div>
        
       </div>


              {/* View all button */}
       <div className="relative flex justify-center items-center xl:top-[50px] xs:top-[20px]">
          <button className="relative xl:w-[218px] xl-h-[52px] border rounded-full  xs:w-[358px] xs:h-[46px]">View All</button>
          
          </div>
    </div>
  )
}

export default NewArrival
