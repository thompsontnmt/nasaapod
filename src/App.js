import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    /* jshint ignore:start */
    <BrowserRouter>
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nasaphoto" element={<NasaPhoto />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    /* jshint ignore:end */
  );
}

export default App;
