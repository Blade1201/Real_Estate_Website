import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Agents from "./components/Agents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Featured/>
      <Agents/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
