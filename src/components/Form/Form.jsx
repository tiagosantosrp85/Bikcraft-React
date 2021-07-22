import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import { Section } from "./styles";
import { Customize } from "./styles";
import Heading from "../Heading";

const style = [
  {
    id: 1,
    li: "Cores",
  },
  {
    id: 2,
    li: "Estilo",
  },
  {
    id: 3,
    li: "Medidas",
  },
  {
    id: 4,
    li: "Acessórios",
  },
  {
    id: 5,
    li: "E Outros",
  },
];

const Form = () => (
  <Section>
    <Heading primary>orçamento</Heading>

    <Container>
      <div>
        <form action="">
          <label htmlFor="">
            Nome
            <input type="text" />
          </label>

          <label for="email">
            E-mail
            <input id="email" name="email" type="text" />
          </label>

          <label for="telefone">
            Telefone
            <input id="telefone" name="telefone" type="text" />
          </label>

          <label for="mensagem">
            Especificações
            <textarea name="mensagem" id="mensagem" />
          </label>
        </form>

        <Button>ENVIAR</Button>
      </div>

      <Customize>
        <div>
          <h2>Dados</h2>

          <a href="tel:+552199999999">+55 21 9999-9999</a>

          <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
        </div>

        <div>
          <h2>Monte a sua Bikcraft</h2>

          <p>Escolha as especificações:</p>

          <ul>
            {style.map((item) => (
              <li key={item.id}>- {item.li}</li>
            ))}
          </ul>
        </div>
      </Customize>
    </Container>
  </Section>
);

export default Form;
