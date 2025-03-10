import BillSplitter from "./components/BillSplitter";
import ResultPanel from "./components/ResultPanel";

function App() {
  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <BillSplitter />
        <ResultPanel />
      </div>
    </>
  );
}

export default App;
