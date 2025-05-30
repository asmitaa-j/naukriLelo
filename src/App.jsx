
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobPost from "./pages/JobPost";  
import JobSeek from "./pages/JobSeek";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/jobsposting" element={<JobPost />} /> 
        <Route path="/jobsgallery" element={<JobSeek />} /> 

      </Routes>
    </Router>
  );
}

export default App;

