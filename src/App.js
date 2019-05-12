import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header, Footer } from "./containers";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
