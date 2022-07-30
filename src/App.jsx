import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome/Welcome"
import { Login } from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import GlobalPreferences from "./pages/GlobalPreferences/GlobalPreferences";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/preferences" element={<GlobalPreferences />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
