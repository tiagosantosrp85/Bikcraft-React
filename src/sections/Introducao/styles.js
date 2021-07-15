import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

export const Intro = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;
  text-align: center;
  padding-bottom: 72px;
  margin-top: 96px;

  h1 {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    max-width: 300px;
    margin: 0 auto;

    &::before {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #fff;
      margin: 14px auto 10px auto;
    }
    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #fff;
      margin: 14px auto 10px auto;
    }
  }
  cite {
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #fff;
    display: block;
    margin-bottom: 30px;
  }
`;
