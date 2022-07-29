import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome/Welcome";
import { Login } from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Preferences from "./pages/Preferences/Preferences";
import ProtectedRoute from "./common/protected-route/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/preferences" element={
          <ProtectedRoute>
            <Preferences title="Buna"/>
          </ProtectedRoute>
        } />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
