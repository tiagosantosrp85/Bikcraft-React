import React from "react";
import { Banner, Container, Icon } from "./styles";

const Topics = ({ image, title, icon, link }) => (
  <Container>
    <Banner to={link} image={image}>
      <span>{title}</span>
    </Banner>

    <Icon to={link}>
      <img src={icon} alt={title} />
    </Icon>
  </Container>
);

export default Topics;
