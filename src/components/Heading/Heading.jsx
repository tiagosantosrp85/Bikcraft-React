import React from "react";
import { Title } from "./styles";

const Heading = ({ children, primary, mb }) => (
  <Title mb={mb} primary={primary}>
    {children}
  </Title>
);

export default Heading;
