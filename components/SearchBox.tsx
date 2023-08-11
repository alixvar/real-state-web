/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FiSearch, FiHome } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import LongBuild from "@/assets/longbuild.svg";

function SearchBox() {
  return (
    <section className="relative flex flex-col items-center justify-center my-16">
      <div className="bg-black w-full lg:pt-40 px-4 pb-28 pt-20 lg:pb-48 text-white rounded-xl flex items-center justify-center">
        <div className="absolute lg:left-36 lg:-top-32 flex lg:gap-10 items-center">
          {/* Bulding Image  */}
          <div className="relative ml-2 lg:ml-0 max-w-[170px] lg:max-w-sm">
            <Image
              src={LongBuild}
              width={350}
              height={850}
              alt=""
              className="w-full h-full"
            />
          </div>
          {/* User and Units Info  */}
          <div className="bg-customSlate/30 rounded-3xl flex items-center lg:px-20 lg:py-8 h-fit gap-2 lg:gap-10 lg:ml-10 mt-10 lg:mt-20 p-4 min-w-[240px]">
            <div className="text-center">
              <p className="text-white font-semibold text-sm lg:text-4xl">
                8K<span className="text-sky-600">+</span>
              </p>
              <p className="text-gray-300 text-xs">Units Sold</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm  lg:text-4xl">
                12K<span className="text-sky-600">+</span>
              </p>
              <p className="text-gray-300 text-xs">Units Ready</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm lg:text-4xl">
                9K<span className="text-sky-600">+</span>
              </p>
              <p className="text-gray-300 text-xs">Customers</p>
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar  */}
      <div className="bg-white p-4 lg:px-16  shadow-lg lg:py-10 rounded-xl flex flex-col gap-4 lg:w-[80%] w-[90%]  absolute -bottom-20 lg:-bottom-32 ">
        {/* Title  */}
        <div className="flex gap-2 items-center">
          <FiSearch size={22} className="text-slate-500" />
          <p className="text-slate-500 text-md lg:text-2xl">
            Let's find your ideal house...
          </p>
        </div>
        {/* Search input  */}
        <div className="flex items-center gap-4 justify-between ">
          <div className="flex items-center  px-3 bg-customSlate rounded-lg w-full lg:w-fit">
            <IoLocationOutline size={25} color={"rgb(29 78 216)"} />
            <input
              type="text"
              className="bg-customSlate p-2 lg:py-3 w-full focus:outline-none lg:placeholder:text-lg flex-1"
              placeholder="Loacation"
            />
          </div>
          <div className="hidden lg:flex items-center  px-3 bg-customSlate rounded-lg">
            <FiHome size={25} color={"rgb(29 78 216)"} />
            <input
              type="text"
              className="bg-customSlate p-2 py-3 w-full focus:outline-none placeholder:text-lg"
              placeholder="Loacation"
            />
          </div>
          <div className="hidden lg:flex items-center  px-3 bg-customSlate rounded-lg">
            <BsCash size={25} color={"rgb(29 78 216)"} />
            <input
              type="text"
              className="bg-customSlate p-2 py-3 w-full focus:outline-none placeholder:text-lg"
              placeholder="Loacation"
            />
          </div>
          <button className="blue_btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchBox;
