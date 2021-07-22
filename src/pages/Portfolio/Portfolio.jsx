import React from "react";
import Navigation from "../../sections/Navigation";
import Hero from "../../components/Hero/Hero";
import bgHero from "../../assets/bg-portfolio.jpg";
import { Content } from "./styles";

const Portfolio = () => (
  <>
    <Navigation />

    <Hero
      title="Portfolio"
      description="conheça os projetos que amamos mostrar"
      image={bgHero}
    />
    <Content>
      <div>
        <p>
          “Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
          foi intensificar o meu amor por esta atividade. Recomendo à todos que
          amo.”
        </p>

        <cite>jhony rato</cite>
      </div>
    </Content>
  </>
);

export default Portfolio;
