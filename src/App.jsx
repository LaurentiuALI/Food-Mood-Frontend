import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Welcome } from "./pages/Welcome/Welcome"
import { Login } from "./pages/Login/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
