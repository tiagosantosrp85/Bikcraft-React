import React from "react";
import Hero from "../../components/Hero/Hero";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import bgHero from "../../assets/bg-sobre.jpg";
import Equipe from "../../assets/equipe.jpg";
import { Content } from "./styles";

const Sobre = () => (
  <>
    <Navigation />

    <Hero
      title="Sobre"
      description="conheça mais sobre a bikcraft"
      image={bgHero}
    />

    <Content>
      <div>
        <h3>HISTÓRIA, MISSÃO E VISÃO</h3>
        <p>
          Quando iniciamos a Bikcraft queriamos apenas um produto que
          adoraríamos utilizar. Eramos apaixonados por pedalar e também por
          fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho na
          garagem da nossa casa.
        </p>
        <p>
          Conheça os nossos produtos, pergunte para os nossos clientes e
          descubra a maravilha de ter uma Bikcraft na sua casa.
        </p>
      </div>

      <div>
        <h3>VALORES</h3>
        <ul>
          <li>- Qualidade no processo com</li>
          <li>- Foco no cliente sem perder a</li>
          <li>- Diversão, preservando a</li>
          <li>- Natureza com sustentabilidade</li>
        </ul>
      </div>

      <img src={Equipe} alt="Equipe Bikcraft" />
    </Content>

    <Footer />
  </>
);

export default Sobre;
