import Hero from "@/app/home/hero"
import Dishes from "@/app/home/dishes"
import Strenght from "@/app/home/strength"
import Testimonials from "@/app/home/testimonials"
import Image from "next/image"


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-[150px] items-center ps-4">
        <Image src={"/images/Sliced-pizza.png"} width={400} height={400} className="w-[300px] h-[300px]  xl:h-[400px] xl:w-[400px]" alt="Shared Pizza"/>
        <div>
        <h2 className="text-[28px]  mb-4 font-bold max-w-[80%] xl:max-w-[30%]">Daily fresh and always tasty</h2>
        <div className="flex  gap-4 xl:gap-16 items-center">
        <p className=" md:max-w-full lg:max-w-[42%] leading-10 text-lg text-[#3d3b3a] font-medium">There are many variations of passages of Lorem Ipsum available but the majority haved</p>
        <Image src={"/images/Garlic.png"} width={90} height={90} className=" h-[60px] lg:h-[90px" alt="Garlic Ball"/>

        </div>
        

        </div>

      </div>
      <div>
          <div className="ps-4 mt-16">
            <h2 className="text-[#e6230d] font-semibold text-xl pb-1">Popular Dishes</h2>
            <h2 className="text-3xl font-bold  pb-12">Brows our Menu</h2>
          </div>
            
            <Dishes/>
      </div>
      
      <Strenght/>
      <Testimonials/>
    

     </main>
  )
}
