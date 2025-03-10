import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";
import { useState } from "react";

function App() {
  const [bilsAmount, setBilsAmount] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter
          setBilsAmount={setBilsAmount}
          setNumberPeople={setNumberPeople}
        />
        <ResultPanel />
      </div>
    </>
  );
}

export default App;
