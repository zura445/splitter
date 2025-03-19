import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

const Percent = [5, 10, 15, 25, 50];

function App() {
  const [saveBills, setSaveBills] = useState("");
  const [savePeople, setSavePeople] = useState("");
  const [percentageAmount, setPercentageAmount] = useState();

  const handleSave = (event) => {
    event.preventDefault();
  };

  const tipAmountFunc = () => {
    if (saveBills && percentageAmount && savePeople) {
      return (saveBills * percentageAmount) / 100 / savePeople;
    }
    return 0;
  };

  const totalAmountFunc = () => {
    if (savePeople > 0) {
      return saveBills / savePeople + tipAmountFunc();
    }
    return 0;
  };

  const clearFunc = () => {
    setSaveBills("");
    setSavePeople("");
    setPercentageAmount("");
  };

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <BillSplitter
          setSaveBills={setSaveBills}
          setSavePeople={setSavePeople}
          handleSave={handleSave}
          setPercentageAmount={setPercentageAmount}
          Percent={Percent}
          percentageAmount={percentageAmount}
          saveBills={saveBills}
          savePeople={savePeople}
        />
        <ResultPanel
          saveBills={saveBills}
          savePeople={savePeople}
          handleSave={handleSave}
          tipAmountFunc={tipAmountFunc}
          totalAmountFunc={totalAmountFunc}
          clearFunc={clearFunc}
        />
      </div>
    </>
  );
}

export default App;
