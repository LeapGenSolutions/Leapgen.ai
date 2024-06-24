import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import FeatureDetails from "./components/FeatureDetails";

function App() {
  const [loadHistory, setloadHistory] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home loadHistory={loadHistory} setloadHistory={setloadHistory} />
          }
        ></Route>
        <Route
          path="/:id"
          element={<FeatureDetails setloadHistory={setloadHistory} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
