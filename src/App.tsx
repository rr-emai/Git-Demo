import { type JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/home" element={<h2>Home Routes</h2>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
