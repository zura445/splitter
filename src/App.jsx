import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

const Percent = [5, 10, 15, 25, 50];

function App() {
  const [saveBils, setSaveBils] = useState(0);
  const [savePeople, setSavePeople] = useState(0);
  const [percentageAmount, setPercentageAmount] = useState(null);

  const handleSave = (event) => {
    event.preventDefault();
    setSaveBils(saveBils);
    setSavePeople(savePeople);
  };

  const tipAmountFunc = () => {
    if (saveBils && percentageAmount) {
      return (saveBils * percentageAmount) / 100 / savePeople;
    }
    return 0;
  };

  const totalAmountFunc = () => {
    if (savePeople > 0) {
      return saveBils / savePeople + tipAmountFunc();
    }
    return 0;
  };

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter
          setSaveBils={setSaveBils}
          setSavePeople={setSavePeople}
          handleSave={handleSave}
          setPercentageAmount={setPercentageAmount}
          Percent={Percent}
        />
        <ResultPanel
          saveBils={saveBils}
          savePeople={savePeople}
          handleSave={handleSave}
          tipAmountFunc={tipAmountFunc}
          totalAmountFunc={totalAmountFunc}
        />
      </div>
    </>
  );
}

export default App;
