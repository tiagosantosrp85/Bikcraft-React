import React from "react";
import { Container } from "./styles";

const Hero = ({ title, description, image }) => (
  <Container image={image}>
    <h1>{title}</h1>

    <p>{description}</p>
  </Container>
);

export default Hero;
