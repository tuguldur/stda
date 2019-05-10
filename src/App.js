import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header } from "./containers";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Header />
      </div>
    </div>
  );
}

export default App;
