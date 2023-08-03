import Image from "next/image";
import building from "@/assets/building.svg";
import AboutUs from "@/components/AboutUs";
import SearchBox from "@/components/SearchBox";
import Featured from "@/components/Featured";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="px-4">
      {/* Background Frame  */}
      <div className="bg-black w-full h-fit p-6  rounded-xl flex flex-col items-center justify-center md:flex-row">
        {/* Top Section  */}
        <div className="h-full w-full md:w-3/5 bg-slate-200 rounded-xl p-4 lg:p-8 lg:py-16 flex flex-col items-center lg:items-start gap-8 md:flex-1">
          {/* Title  */}
          <div className="flex flex-col w-full ">
            <p className="text-3xl lg:text-6xl font-light">Unlock Your Ideal</p>
            <div className="flex gap-2 text-4xl w-full items-center mt-3 justify-center font-bold">
              <p className="lg:text-5xl">Living</p>
              <p className="text-blue-700 lg:text-5xl">Space!</p>
            </div>
          </div>
          {/* Description  */}
          <p className="text-base text-slate-400 max-w-xs">
            Whether you're looking to buy,sell,or rent,we are here to assist you
            every step of the wey.
          </p>
          <div className="w-full flex gap-4 ">
            <button className="bg-blue-700 text-white px-6 py-[7px] rounded-full">
              Contact
            </button>
            <button className="hidden lg:inline border border-blue-700 text-blue-700 font-semibold px-6 py-[7px] rounded-full">
              Register
            </button>
          </div>
        </div>
        {/* Bridge Content  */}
        <div className="flex items-center h-4 w-full bg-slate-200 md:hidden">
          <div className="h-full bg-black w-[60%] rounded-r-full" />
          <div className="h-full w-[10%]" />
          <div className="h-full bg-black w-[30%] rounded-l-full" />
        </div>
        {/* Bottom Section  */}
        <div className="w-full h-full relative flex items-center justify-center rounded-xl md:w-2/5">
          <Image
            src={building}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full md:hidden"
          />
        </div>
      </div>
      {/* About Us  */}
      <AboutUs />
      <SearchBox />
      <Featured />
    </main>
  );
}
