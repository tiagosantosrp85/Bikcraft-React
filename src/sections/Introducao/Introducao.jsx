import React from "react";
import Button from "../../components/Button";
import { Intro } from "./styles";

const Introducao = () => (
  <Intro>
    <h1>BICICLETAS FEITAS A MÃO</h1>
    <p>
      “não tenha nada em sua casa que você não considere útil ou acredita ser
      bonito”
    </p>
    <cite>WILLIAM MORRIS</cite>

    <Button>orçamento</Button>
  </Intro>
);

export default Introducao;
