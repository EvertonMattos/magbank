import React from "react";
import Hero from "../components/Hero";
import CreditCard from "../components/CreditCard";
import CardList from "../components/CardList";
import CenterButton from "../components/CenterButton";
import Institutional from "../components/Institucional";
import Faq from "../components/Faq";
import posts from "../data/posts";

const Home = ({ handleClick }) => (
  <>
    <Hero onClick={handleClick} />
    <CreditCard />
    <CardList posts={posts} />
    <CenterButton onClick={handleClick}>Abra sua conta</CenterButton>
    <Institutional />
    <Faq />
  </>
);

export default Home;
