import React from "react";
import { Routes, Route } from "react-router-dom";
import Begin from "../components/Begin"; // Adjust path if needed
import Exam from "../components/Exam"; // Adjust path if needed

export function Test() {
  return (
    <Routes>
      {/* Default route to Begin */}
      <Route path="/" element={<Begin />} />
      {/* Exam route */}
      <Route path="/exam" element={<Exam />} />
    </Routes>
  );
}
