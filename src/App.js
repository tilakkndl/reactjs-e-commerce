import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
