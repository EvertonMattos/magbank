import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenterButton from "./components/CenterButton";
import Institucional from "./components/Institucional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
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
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
