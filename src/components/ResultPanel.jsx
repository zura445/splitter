import React from "react";

function ResultPanel({ saveBils, savePeople, handleSave }) {
  return (
    <div className="bg-green-900 p-10 rounded-xl">
      <div className="flex justify-between">
        <div className="font-bold">
          <p className="text-white">Tip Amount</p>
          <p className="text-gray-300 text-xs">/ person</p>
        </div>
        <div className="text-5xl text-green-200 font-bold">{saveBils}</div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="font-bold">
          <p className="text-white">Total</p>
          <p className="text-gray-300 text-xs">/ person</p>
        </div>
        <div className="text-5xl text-green-200 font-bold">{savePeople}</div>
      </div>
      <button
        onClick={handleSave}
        className="mt-[133px] w-full bg-green-200 h-12 font-bold rounded cursor-pointer"
      >
        RESET
      </button>
    </div>
  );
}

export default ResultPanel;
