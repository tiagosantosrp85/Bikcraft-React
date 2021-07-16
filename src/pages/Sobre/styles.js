import styled from "styled-components";

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px 50px;
  padding: 60px 0;

  img {
    grid-column: 1 / 3;
    width: 100%;
  }

  h3 {
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 20px;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 6px 0 12px 0;
    }
  }

  p {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 1em;
    padding-right: 60px;
  }

  ul li {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    line-height: 30px;
  }
`;
