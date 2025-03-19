import React from "react";

function ResultPanel({
  tipAmountFunc,
  totalAmountFunc,
  clearFunc,
  saveBills,
  savePeople,
}) {
  return (
    <div className="bg-darck-blue p-10 rounded-xl">
      <div className="flex justify-between">
        <div className="font-bold">
          <p className="text-white">Tip Amount</p>
          <p className="text-light-gray text-xs">/ person</p>
        </div>
        <div className="text-5xl text-light-green font-bold">
          ${tipAmountFunc().toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="font-bold">
          <p className="text-white">Total</p>
          <p className="text-light-gray text-xs">/ person</p>
        </div>
        <div className="text-5xl text-light-green font-bold">
          ${totalAmountFunc().toFixed(2)}
        </div>
      </div>
      <button
        // არ მუშაონს ჰოვერი
        onClick={clearFunc}
        className="mt-[133px] w-full bg-blue-800 hover:bg-blue-500 h-12 font-bold rounded cursor-pointer text-darck-blue"
        style={{
          backgroundColor:
            saveBills > 0 && savePeople > 0 ? "#26C2AE" : "#0D686D",
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default ResultPanel;
