import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header, Team, Footer } from "./containers";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Header />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default App;
