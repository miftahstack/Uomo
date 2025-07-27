import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";
import List from "../layouts/List";
import ProductShow from "../layouts/ProductShow";
import Show from "../layouts/Show";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <List />
      <ProductShow />
      <Show />
      <Footer />
    </>
  );
};

export default Home;
