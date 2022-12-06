import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "./components/background/Background";
import Moving from "./components/dog/Dog";
import Stationary from "./components/dog-not-animated/dog-not-animated";

import "./styles/partials/_resets.scss";

function App() {
  function dog() {}

  return (
    <BrowserRouter>
      <div className="App">
        <Background />
        <Moving />
        <Stationary />
      </div>
    </BrowserRouter>
  );
}

export default App;
