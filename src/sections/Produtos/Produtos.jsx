import React from "react";
import ProductItem from "../../components/ProductItem";
import { Container } from "./styles";
import Passeio from "../../assets/passeio.svg";
import Esporte from "../../assets/esporte.svg";
import Retro from "../../assets/retro.svg";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const products = [
  {
    id: 1,
    title: "PASSEIO",
    description: "Muito melhor do que passear pela orla a vidros fechados.",
    image: Passeio,
  },
  {
    id: 2,
    title: "ESPORTE",
    description: "Mais rápida do que Forrest Gump, ninguém vai pegar você. ",
    image: Esporte,
  },
  {
    id: 3,
    title: "RETRO",
    description:
      "O passado volta para lembrarmos o que devemos fazer no futuro.",
    image: Retro,
  },
];

const Produtos = () => (
  <Container>
    <Heading mb={60}>PRODUTOS</Heading>

    <div>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
    <p>clique aqui e veja os detalhes dos produtos</p>
    <Button>produtos</Button>
  </Container>
);

export default Produtos;
