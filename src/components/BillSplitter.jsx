import React from "react";

function BillSplitter({ setSaveBils, setSavePeople, handleSave }) {
  return (
    <div className="">
      <form onSubmit={handleSave}>
        <p className="font-bold">Bill</p>
        <div className="relative">
          <input
            className="h-12 px-5 bg-green-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none  w-[379px]"
            type="number"
            onChange={(event) => {
              setSaveBils(event.target.value);
            }}
          />
          <img
            src="dollar.png"
            alt="dollar image"
            className="absolute top-5 left-3"
          />
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
            type="number"
            className="h-12 px-5 bg-green-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none  w-[379px]"
            onChange={(event) => setSavePeople(event.target.value)}
          />
          <img src="Shape.png" alt="" className="absolute top-5 left-3" />
        </div>
      </form>
    </div>
  );
}

export default BillSplitter;
