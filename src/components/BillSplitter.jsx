import React from "react";

const Percent = ["5%", "10%", "15%", "25%", "50%"];

function BillSplitter({
  setSaveBils,
  setSavePeople,
  handleSave,
  percentageFunc,
}) {
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
          <div className="flex gap-2">
            {Percent.slice(0, 3).map((item, index) => (
              <button
                onChange={percentageFunc}
                key={index}
                className="cursor-pointer w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            {Percent.slice(3, 6).map((item, index) => (
              <button
                onChange={percentageFunc}
                key={index}
                className="cursor-pointer w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl"
              >
                {item}
              </button>
            ))}
            <input
              type="number"
              className="w-[120px] bg-green-100 outline-none rounded-xl text-green-800 p-2 font-bold text-center"
              placeholder="Custom"
            />
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
