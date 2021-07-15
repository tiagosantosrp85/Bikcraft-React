import styled from "styled-components";

export const Cards = styled.div`
  background-color: #fec63e;
  max-width: 300px;
  text-align: center;
  width: 100%;

  div {
    background-color: #000;
    display: flex;
    justify-content: center;
    padding: 20px 0;

    img {
      max-width: 100%;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #000;
      margin: 4px auto 10px auto;
    }
  }

  p {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 20px 20px 20px;
  }
`;
