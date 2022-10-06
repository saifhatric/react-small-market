import axios from "axios"
import { useState, createContext } from 'react'
import Product from "./Product";
import Checkout from "./Checkout";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const appContext = createContext();

function App() {


  const [Items, setItems] = useState([]);

  const handleDelete = (id) => {
    const del = Items.filter((item) => item.id !== id);
    setItems(del)
  }
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route element={<SharedLayout Items={Items.length} />}>
            <Route path="/products" element={<Product Items={Items} setItems={setItems} />} />
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout Items={Items} handleDelete={handleDelete} />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App;
