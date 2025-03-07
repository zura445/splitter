function App() {
  return (
    <>
      <div className="p-8 bg-white rounded-3xl grid grid-cols-2 gap-12">
        <div className="">
          <p>Bill</p>
          <input type="text" />
          <p>Select Tip %</p>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <button>Custom</button>
          <p>Number of People</p>
          <input type="text" />
        </div>
        <div className="bg-green-900 p-10">
          <div className="flex justify-between">
            <div className="">
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <div className="">$4.27</div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <p>Total</p>
              <p>/ person</p>
            </div>
            <div className="">$32.79</div>
          </div>
          <button>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
