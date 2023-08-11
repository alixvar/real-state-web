import { FiArrowUpRight } from "react-icons/fi";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import building from "@/assets/building.svg";
import buildingHorizontal from "@/assets/building-horizontal.svg";

/* eslint-disable react/no-unescaped-entities */
function LandingPageTop() {
  return (
    <>
      {/* Background Frame  */}
      <div className="bg-black w-full  p-6  rounded-3xl flex flex-col items-center justify-center md:flex-row gap-5">
        {/* Right Section  */}
        <div className="flex flex-col md:w-3/5 gap-6 h-full w-full ">
          {/* Large Screen Top Section  */}
          <div className="relative h-full w-full bg-customSlate rounded-3xl p-4 lg:p-8 lg:py-16 flex flex-col items-center lg:items-start gap-8 md:flex-1">
            {/* open button  */}
            <div className="hidden absolute top-4 right-4 md:flex items-center justify-center p-2.5 rounded-full bg-black text-white">
              <FiArrowUpRight size={30} />
            </div>
            {/* Title  */}
            <div className="flex flex-col w-full ">
              <p className="text-3xl lg:text-6xl">Unlock Your Ideal</p>
              <div className="flex gap-2 text-4xl w-full items-center mt-3 justify-center font-bold">
                <p className="lg:text-6xl lg:ml-16">Living</p>
                <p className="text-blue-700 lg:text-6xl">Space!</p>
              </div>
            </div>
            {/* Description  */}
            <p className="text-base text-slate-400 max-w-sm">
              Whether you're looking to buy,sell,or rent,we are here to assist
              you every step of the wey.
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
          {/* Large Screen Bottom Content  */}
          <div className="hidden md:flex items-center justify-center gap-4 w-full h-full">
            <div className="hidden md:flex bg-blue-700 rounded-full w-20 h-60"></div>
            <div className="bg-customSlate w-full p-6 rounded-3xl h-60 flex justify-between flex-col">
              {/* Description  */}
              <div className="max-w-xs text-justify mt-4">
                <p>
                  Welcome to
                  <span className="font-semibold"> Living RealEState</span>
                  <br /> your trusted source for all your <br /> property needs.
                </p>
              </div>
              {/* Logo  */}
              <div>
                <Image src={logo} width={30} height={30} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
        {/* Bridge Content  */}
        {/* <div className="flex items-center h-4 w-full bg-slate-200 md:hidden">
          <div className="h-full bg-black w-[60%] rounded-r-full" />
          <div className="h-full w-[10%]" />
          <div className="h-full bg-black w-[30%] rounded-l-full" />
        </div> */}
        {/* Bottom Section  */}
        <div className="w-full h-full relative flex items-center justify-center rounded-xl md:w-2/5 ">
          <Image
            src={building}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-full h-full md:hidden"
          />
          <Image
            src={buildingHorizontal}
            alt=""
            width={1000}
            height={1000}
            className="w-full max-h-[700px] rounded-3xl hidden md:inline object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageTop;
