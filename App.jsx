import React from 'react'
import Home from './Pages/Home'
import Cart from "./Pages/Cart";
import { Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");
  return (
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

  )
}

export default App
