import Info from "./Info.json";

function App() {
  return (
    <>
      <div className="">
        {Info.map((list, index) => (
          <div className="" key={index}>
            <h1 className="text-2xl">{list.title}</h1>
            <p className="mt-4">{list.text}</p>
            <p className="mt-5 underline">{list.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
