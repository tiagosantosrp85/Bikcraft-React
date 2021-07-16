import React from "react";
import Navigation from "../../sections/Navigation";
import Hero from "../../components/Hero/Hero";
import bgHero from "../../assets/bg-produtos.jpg";
import Passeio from "../../assets/bikcraft-passeio-1.jpg";
import Esporte from "../../assets/bikcraft-esporte-1.jpg";
import Retro from "../../assets/bikcraft-retro-1.jpg";
import Lazer from "../../assets/passeio.svg";
import Radical from "../../assets/esporte.svg";
import Vintage from "../../assets/retro.svg";

import { Box, Container, Icon } from "./styles";
import Topics from "../../components/Topics/Topics";

const Products = [
  {
    id: 1,
    title: "Passeio",
    image: Passeio,
    icon: Lazer,
    link: "/passeio",
  },

  {
    id: 2,
    title: "Esporte",
    image: Esporte,
    icon: Radical,
    link: "/esporte",
  },
  {
    id: 3,
    title: "Retro",
    image: Retro,
    icon: Vintage,
    link: "/retro",
  },
];

const Produtos = () => (
  <>
    <Navigation />

    <Hero
      title="Produtos"
      description="conheça todos os nossos produtos"
      image={bgHero}
    />

    <Container>
      {Products.map((item) => (
        <Topics
          image={item.image}
          title={item.title}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </Container>
  </>
);

export default Produtos;
