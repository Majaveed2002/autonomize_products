import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetailedView from "./components/ProductDetailedView";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetailedView />} />
    </Routes>
  );
}

export default App;
