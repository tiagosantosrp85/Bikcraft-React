import React from "react";
import Navigation from "../../sections/Navigation";
import Introducao from "../../sections/Introducao";
import Produtos from "../../sections/Produtos";
import Portfolio from "../../sections/Portfolio";
import Footer from "../../sections/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Introducao />
      <Produtos />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
