import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

function App() {
  const [saveBils, setSaveBils] = useState("");
  console.log("🚀 ~ App ~ saveBils:", saveBils);

  const [bilsAmount, setBilsAmount] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaveBils(bilsAmount);
  };

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter
          setBilsAmount={setBilsAmount}
          setNumberPeople={setNumberPeople}
          handleSubmit={handleSubmit}
        />
        <ResultPanel handleSubmit={handleSubmit} saveBils={saveBils} />
      </div>
    </>
  );
}

export default App;
