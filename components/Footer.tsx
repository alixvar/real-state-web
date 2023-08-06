import React from "react";

function Footer() {
  return (
    <div className="bg-black w-full p-10 flex flex-col lg:flex-row lg:gap-32 gap-16 lg:pb-16 mt-16">
      <div className="text-white text-3xl font-semibold">
        <p>
          Unlock <br />
          Your Ideal <br />
          Living <br />
          <span className="text-blue-700">Space!</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-slate-300 flex-1 gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white mb-3">Navigation</h1>
          <p>About Us</p>
          <p>Blog</p>
          <p>Property</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white mb-3">Collection</h1>
          <p>Apartment</p>
          <p>Modern Housing</p>
          <p>Rent a House</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white mb-3">
            Our Company
          </h1>
          <p>Agency</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white mb-3">Contact</h1>
          <p>Living@info.com</p>
          <p>+98123456789</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
