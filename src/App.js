import "./styles/partials/_resets.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/background/Background";
import Dog from "./components/dog/Dog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Background />
        {/* <Dog /> */}
        <Routes>
          <Route path="/" element={<Dog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
