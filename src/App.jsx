import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

function App() {
  const [saveBils, setSaveBils] = useState("");
  const [savePeople, setSavePeople] = useState("");

  const [bilsAmount, setBilsAmount] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  const handleSave = (event) => {
    event.preventDefault();
    setSaveBils(bilsAmount);
    setSavePeople(numberPeople);
  };

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter
          setBilsAmount={setBilsAmount}
          setNumberPeople={setNumberPeople}
          handleSave={handleSave}
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
