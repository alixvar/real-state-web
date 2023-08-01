import Image from "next/image";
import building from "@/assets/building.svg"
import AboutUs from "@/components/AboutUs";
import SearchBox from "@/components/SearchBox";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="px-4">
      {/* Background Frame  */}
      <div className="bg-black w-full px-4 py-6  rounded-xl flex flex-col items-center justify-center">
        {/* Top Section  */}
        <div className="bg-slate-200 rounded-xl p-4  flex flex-col items-center gap-8 min-w-[425px]">
          {/* Title  */}
          <div className="flex flex-col w-full ">
            <p className="text-3xl">Unlock Your Ideal</p>
            <div className="flex gap-2 text-4xl w-full items-center justify-center font-bold">
              <p>Living</p>
              <p className="text-blue-700">Space!</p>
            </div>
          </div>
          {/* Description  */}
          <p className="text-base text-slate-400">
            Whether you're looking to buy,sell,or rent,we are here to assist you
            every step of the wey.
          </p>
          <div className="w-full flex justify-between ">
            <button className="bg-blue-700 text-white px-6 py-[7px] rounded-full">
              Contact
            </button>
          </div>
        </div>
        {/* Bridge Content  */}
        <div className="flex items-center h-4 w-full bg-slate-200">
          <div className="h-full bg-black w-[60%] rounded-r-full"/>
          <div className="h-full w-[10%]"/>
          <div className="h-full bg-black w-[30%] rounded-l-full"/>
        </div>
        {/* Bottom Section  */}
        <div className="rounded-xl flex items-center min-w-[425px]">
         <Image src={building} alt="" width={1000} height={1000} className="w-full h-full object-cover min-w-[435px]"/>
        </div>
      </div>
      {/* About Us  */}
      <AboutUs />
      <SearchBox />
    </main>
  );
}
