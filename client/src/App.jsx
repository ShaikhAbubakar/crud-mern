import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/EditUser/:id" element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
