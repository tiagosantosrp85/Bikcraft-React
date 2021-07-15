import React from "react";
import { Cards } from "./styles";

const ProductItem = ({ title, description, image }) => (
  <Cards>
    <div>
      <img src={image} alt={title} />
    </div>

    <h3>{title}</h3>
    <p>{description}</p>
  </Cards>
);

export default ProductItem;
