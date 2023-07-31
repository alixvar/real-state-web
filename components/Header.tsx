import Image from "next/image";
import logo from "@/assets/logo.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Header() {
  return (
    <div className="flex w-full h-20 lg:h-28 items-center justify-between px-4">
      {/* Right Side  */}
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt2 size={30} className="cursor-pointer" />

        {/* Website Logo   */}
        <div className="flex items-center gap-1 p-2 cursor-pointer">
          <Image src={logo} width={30} height={30} alt="Logo" />
          <div className="flex items-center ">
            <span className="text-blue-800 font-semibold text-xl">Liv</span>
            <span className="font-semibold text-xl">ing</span>
          </div>
        </div>
      </div>
      {/* Left Side  */}
      <div>
        <button className="outline_btn">Register</button>
      </div>
    </div>
  );
}

export default Header;
