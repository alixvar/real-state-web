/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FiSearch, FiHome } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function SearchBox() {
  return (
    <section className="relative flex flex-col items-center justify-center my-16">
      <div className="h-52 pb-8 bg-black w-full p-2 text-white rounded-xl flex items-center px-4">
        {/* Bulding Image  */}
        <div className="w-[45%]">
          {/* <Image src={""} width={100} height={100} alt="" /> */}
        </div>
        {/* User and Units Info  */}
        <div className="bg-white rounded-xl flex items-center justify-between w-[55%] px-3 py-2 h-fit">
          <div className="text-center">
            <p className="text-blue-700 font-semibold">8K+</p>
            <p className="text-slate-500 text-xs">Units Sold</p>
          </div>
          <div className="text-center">
            <p className="text-blue-700 font-semibold">12K+</p>
            <p className="text-slate-500 text-xs">Units Ready</p>
          </div>
          <div className="text-center">
            <p className="text-blue-700 font-semibold">9K+</p>
            <p className="text-slate-500 text-xs">Customers</p>
          </div>
        </div>
      </div>
      {/* Search Bar  */}
      <div className="bg-white p-4 rounded-xl flex flex-col gap-4 w-[80%]  absolute -bottom-20 ">
        {/* Title  */}
        <div className="flex gap-2">
          <FiSearch size={20} className="text-slate-500" />
          <p className="text-slate-500 text-sm">
            Let's find your ideal house...
          </p>
        </div>
        {/* Search input  */}
        <div className="flex items-center gap-4 justify-between ">
          <div className="flex items-center  px-3 bg-customSlate rounded-lg">
            <IoLocationOutline size={25} color={"rgb(29 78 216)"} />
            <input
              type="text"
              className="bg-customSlate p-2 py-3 w-full focus:outline-none placeholder:text-lg"
              placeholder="Loacation"
            />
          </div>
          <div className="flex items-center  px-3 bg-customSlate rounded-lg">
            <FiHome size={25} color={"rgb(29 78 216)"} />
            <input
              type="text"
              className="bg-customSlate p-2 py-3 w-full focus:outline-none placeholder:text-lg"
              placeholder="Loacation"
            />
          </div>
          <div className="flex items-center  px-3 bg-customSlate rounded-lg">
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
