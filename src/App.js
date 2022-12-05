import "./styles/partials/_resets.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/background/Background";
function App() {
  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;
