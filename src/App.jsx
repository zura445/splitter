function App() {
  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <div className="">
          <p className="font-bold">Bill</p>
          <div className="relative">
            <input
              className="h-12 px-5 bg-green-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none  w-[379px]"
              type="text"
            />
            <img src="dollar.png" alt="" className="absolute top-5 left-3" />
          </div>
          <p className="font-bold mt-10">Select Tip %</p>
          <div className="text-white mt-4">
            <div className="gap-2 flex">
              <button className="cursor-pointer w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl">
                5%
              </button>
              <button className="cursor-pointer w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl">
                10%
              </button>
              <button className="cursor-pointer w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl">
                15%
              </button>
            </div>
            <div className="gap-2 flex  mt-3">
              <button className="cursor-pointer w-[120px] bg-green-900 h-[48px] rounded-lg font-bold text-2xl">
                25%
              </button>
              <button className="cursor-pointer w-[120px] bg-green-900 h-[48px] rounded-lg font-bold text-2xl">
                50%
              </button>
              <button className="cursor-pointer w-[120px] bg-green-100 text-gray-600 h-[48px] rounded-lg font-bold text-2xl">
                Custom
              </button>
            </div>
          </div>
          <p className="mt-10 font-bold">Number of People</p>
          <div className="relative">
            <input
              type="text"
              className="h-12 px-5 bg-green-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none  w-[379px]"
            />
            <img src="Shape.png" alt="" className="absolute top-5 left-3" />
          </div>
        </div>
        <div className="bg-green-900 p-10 rounded-xl">
          <div className="flex justify-between">
            <div className="font-bold">
              <p className="text-white">Tip Amount</p>
              <p className="text-gray-300 text-xs">/ person</p>
            </div>
            <div className="text-5xl text-green-200">$4.27</div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="font-bold">
              <p className="text-white">Total</p>
              <p className="text-gray-300 text-xs">/ person</p>
            </div>
            <div className="text-5xl text-green-200">$32.79</div>
          </div>
          <button className="mt-[133px] w-full bg-green-200 h-12 font-bold rounded cursor-pointer">
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
