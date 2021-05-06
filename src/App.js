import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenterButton from "./components/CenterButton";
import Institucional from "./components/Institucional";
import posts from "./data/posts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenterButton>Abra sua conta</CenterButton>
      <Institucional />
    </div>
  );
}

export default App;
