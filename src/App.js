import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
