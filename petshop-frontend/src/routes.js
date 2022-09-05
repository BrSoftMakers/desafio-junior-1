import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Clients from "./pages/Clients";
import Pets from "./pages/Pets";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clients/:id/pets" element={<Pets />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/" element={<Clients />} />
      </Routes>
    </Router>
  );
}