import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import News from "./components/News";

function App() {
  const [category, setcatagory] = useState([]);
  // console.log(catagory);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav setcatagory={setcatagory} />
            <News category={category} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
