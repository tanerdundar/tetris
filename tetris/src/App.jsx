import { useState } from "react";
import "./App.css";
import Bottle from "./components/Bottle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Bottle />
    </div>
  );
}

export default App;
