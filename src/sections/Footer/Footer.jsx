import React from "react";
import Face from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import Twi from "../../assets/twitter.svg";

import { Quote } from "./styles";
import { Copy } from "./styles";
import { End } from "./styles";

const footer = [
  {
    id: 1,
    title: "Facebook",
    image: Face,
    link: "htttps://wwww.facebook.com",
  },
  {
    id: 2,
    title: "Instagram",
    image: Insta,
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    title: "Twitter",
    image: Twi,
    link: "https://www.twitter.com/",
  },
];

const Footer = () => (
  <>
    <Quote>
      <p>
        “o verdadeiro segredo da felicidade está em ter um genuíno interesse por
        todos os detalhes da vida cotidiana.”
      </p>

      <cite>WILLIAM MORRIS</cite>
    </Quote>

    <Copy>
      <div>
        <div>
          <h3>NOSSA HISTÓRIA</h3>
          <p>
            Quando iniciamos a Bikcraft queriamos apenas um produto que
            adoraríamos utilizar. Eramos apaixonados por pedalar e também por
            fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho
            na garagem da nossa casa.
          </p>
        </div>

        <div>
          <h3>CONTATO</h3>
          <ul>
            <li>- +55 21 9999-9999</li>
            <li>- contato@bikcraft.com</li>
            <li>- Rua Ali Perto - Botafogo</li>
          </ul>
        </div>

        <div>
          <h3>REDES SOCIAIS</h3>
          {footer.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </Copy>

    <End>
      <p>Bikcraft 2021 - Alguns direitos reservados.</p>
    </End>
  </>
);

export default Footer;
