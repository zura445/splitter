import React from "react";

function BillSplitter({
  setSaveBills,
  setSavePeople,
  handleSave,
  setPercentageAmount,
  Percent,
  percentageAmount,
  saveBills,
  savePeople,
}) {
  return (
    <div className="">
      <form onSubmit={handleSave}>
        <p className="font-bold">Bill</p>
        <div className="relative">
          <input
            className="h-12 px-5 bg-blue-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none w-full md:w-[379px]"
            type="number"
            onChange={(event) => {
              setSaveBills(event.target.value);
            }}
            value={saveBills}
            placeholder="0"
          />
          <img
            src="dollar.png"
            alt="dollar image"
            className="absolute top-5 left-3"
          />
        </div>
        <p className="font-bold mt-10">Select Tip %</p>
        <div className="text-white mt-4">
          <div className="text-white mt-4 grid grid-cols-3 grid-rows-2 gap-2">
            {Percent.map((item, index) => (
              <button
                onClick={() => setPercentageAmount(item)}
                key={index}
                className={`cursor-pointer w-auto md:w-[120px] h-[48px] bg-green-900 rounded-lg font-bold text-2xl
                  ${percentageAmount === item ? "bg-[#9FE8DF]" : "bg-[#00474b]"}
                  `}
              >
                {item} %
              </button>
            ))}
            <input
              type="number"
              className="w-auto md:w-[120px] bg-blue-100 outline-none rounded-xl text-darck-blue p-2 font-bold text-center col-start-3 row-start-2"
              placeholder="Custom"
              onChange={(e) => setPercentageAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between mt-10 font-bold">
          <p>Number of People</p>
          {parseInt(savePeople) <= 0 && (
            <p className="text-red-400">Can’t be zero</p>
          )}
        </div>
        <div className="relative">
          <input
            type="number"
            className="h-12 px-5 bg-blue-100 text-green-800 font-bold mt-1.5 rounded-xl text-right outline-none w-full md:w-[379px]"
            onChange={(event) => setSavePeople(event.target.value)}
            value={savePeople}
            placeholder="0"
          />

          <img src="Shape.png" alt="" className="absolute top-5 left-3" />
        </div>
      </form>
    </div>
  );
}

export default BillSplitter;
