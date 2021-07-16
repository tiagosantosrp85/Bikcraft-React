import React from "react";
import Retro from "../../assets/retro.jpg";
import Passeio from "../../assets/passeio.jpg";
import Esporte from "../../assets/esporte.jpg";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

import { Container } from "./styles";

const portfolio = [
  {
    id: 1,
    title: "Retro",
    image: Retro,
  },

  {
    id: 2,
    title: "Passeio",
    image: Passeio,
  },
  {
    id: 3,
    title: "Esporte",
    image: Esporte,
  },
];

const Portfolio = () => (
  <Container>
    <Heading primary mb={40}>
      PORTFOLIO
    </Heading>

    <div>
      {portfolio.map((item) => (
        <img key={item.id} src={item.image} alt={item.title} />
      ))}
    </div>

    <p>conheça mais o nosso portfólio</p>

    <Button>PORTFÓLIO</Button>
  </Container>
);

export default Portfolio;
