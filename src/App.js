import "./styles/partials/_resets.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/background/Background";
import Dog from "./components/dog/Dog";
import Doganimated from "./components/dog-not-animated/dog-not-animated";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Background />
        <Dog />
        <Doganimated />
      </div>
    </BrowserRouter>
  );
}

export default App;
