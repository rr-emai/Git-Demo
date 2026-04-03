import { type JSX } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Practice from "./pages/Practice";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/">App</Link>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/practice">Practice</Link>
            </div>
          }
        />
        <Route path="/Home" element={<h2>Home</h2>} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
