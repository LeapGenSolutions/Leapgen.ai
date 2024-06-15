import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import FeatureDetails from "./components/FeatureDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<FeatureDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
