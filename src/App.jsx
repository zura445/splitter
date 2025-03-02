import { useState } from "react";
import Info from "./Info.json";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthore] = useState("");
  const [postData, setPostData] = useState(Info);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostData((prevPosts) => [...prevPosts, { title, content, author }]);
  };

  const handleDelete = (id) => {
    setPostData((prevPosts) => prevPosts.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="">
        {postData.map((list, index) => (
          <div className="" key={index}>
            <h1 className="text-2xl">{list.title}</h1>
            <p className="mt-4">{list.content}</p>
            <p className="mt-5 underline">{list.author}</p>
            <button
              onClick={() => handleDelete(list.id)}
              className="bg-red-700 text-white px-4 py-1 rounded mt-2 cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="ml-10 mt-20">
        <div className="">
          <label htmlFor="">Title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Content</label>
          <input
            onChange={(event) => setContent(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Author</label>
          <input
            onChange={(event) => setAuthore(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <button
          className="px-10 py-4 bg-blue-700 font-bold rounded mt-6 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
