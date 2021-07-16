import styled from "styled-components";
import Bg from "../../assets/bg-footer.jpg";

export const Quote = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 220px;
  text-align: center;
  padding-top: 40px;

  p {
    max-width: 450px;
    margin: 0 auto;
    color: #fff;

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
    letter-spacing: 0.1em;
  }
`;

export const Copy = styled.div`
  background-color: #000;
  padding: 20px 0;

  & > div {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
  }

  h3 {
    font-size: 18px;
    line-height: 25px;
    color: #fec63e;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #fec63e;
      margin: 6px 0 12px 0;
    }
  }

  p {
    color: #fff;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
  }

  li {
    color: #fff;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
  }

  a:hover {
    border-color: #fff;
  }

  a {
    border: 3px solid #fec63e;
    display: inline-flex;
    padding: 6px;

    & + a {
      margin-left: 12px;
    }
  }
`;

export const End = styled.div`
  width: 100%;
  background: #fec63e;
  padding: 20px 0;

  p {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
    margin-left: 190px;
  }
`;
