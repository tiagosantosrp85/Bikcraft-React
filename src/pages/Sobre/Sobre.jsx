import React from "react";
import Navigation from "../../sections/Navigation";
import Heading from "../../components/Heading";

import { Introducao } from "./styles";

const Sobre = () => (
  <>
    <Navigation />

    <Introducao>
      <Heading>SOBRE</Heading>
      <p>conheça mais sobre a bikcraft</p>
    </Introducao>
  </>
);

export default Sobre;
