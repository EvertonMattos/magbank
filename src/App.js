import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenterButton from "./components/CenterButton";
import Institucional from "./components/Institucional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import posts from "./data/posts";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Hero handleCreateAcc={() => setShowModal(true)} />
      <CreditCard />
      <CardList posts={posts} />
      <CenterButton handleCreateAcc={() => setShowModal(true)}>
        Abra sua conta
      </CenterButton>
      <Institucional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
