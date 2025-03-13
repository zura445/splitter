import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

function App() {
  const [saveBils, setSaveBils] = useState(0);
  const [savePeople, setSavePeople] = useState(0);
  const [percentageAmount, setPercentageAmount] = useState(0);

  const percentageFunc = () => {
    setPercentageAmount(percentageAmount);
  };
  console.log("🚀 ~ percentageFunc ~ percentageFunc:", percentageFunc);

  const handleSave = (event) => {
    event.preventDefault();
    setSaveBils(saveBils);
    setSavePeople(savePeople);
  };

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter
          setSaveBils={setSaveBils}
          setSavePeople={setSavePeople}
          handleSave={handleSave}
          percentageFunc={percentageFunc}
        />
        <ResultPanel
          saveBils={saveBils}
          savePeople={savePeople}
          handleSave={handleSave}
        />
      </div>
    </>
  );
}

export default App;
