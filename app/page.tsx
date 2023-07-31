export default function Home() {
  return (
    <main className="px-4">
      {/* Background Frame  */}
      <div className="bg-black w-full p-4  rounded-xl flex flex-col items-center justify-center gap-4">
        {/* Top Section  */}
        <div className="bg-slate-200 rounded-xl p-4  flex flex-col items-center gap-8">
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
        {/* Bottom Section  */}
        <div className="bg-slate-200 rounded-xl p-4  flex flex-col items-center gap-8">
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
      </div>
    </main>
  );
}
