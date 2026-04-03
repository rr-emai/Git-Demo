import { type JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/home" element={<h2>Home Routes</h2>} />
        {/* <Route /> */}
      </Routes>
    </>
  );
}

export default App;
