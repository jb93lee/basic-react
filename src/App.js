// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./Button";
import Counter from "./Counter";
import Greeting from "./Greeting";
import Home from "./Home";
import Info from "./Info";
import React, { useEffect, useState } from "react";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;