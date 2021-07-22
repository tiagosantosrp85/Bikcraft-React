import styled from "styled-components";

export const Section = styled.section`
  background: #000;
  padding-top: 40px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 40px 180px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 100px;

  Button {
    display: initial;
  }

  label {
    display: block;
    color: #fff;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 4px;

    input {
      display: block;
      width: 100%;
      border: 4px solid #fec63e;
      background: none;
      color: #fff;
      padding: 7px 10px;
      margin-bottom: 10px;
      outline: none;
      font-size: 14px;
      font-family: Georgia, "Times New Roman", serif;
    }

    textarea {
      display: block;
      width: 100%;
      height: 120px;
      border: 4px solid #fec63e;
      background: none;
      color: #fff;
      padding: 7px 10px;
      margin-bottom: 20px;
      outline: none;
      font-size: 14px;
      font-family: Georgia, "Times New Roman", serif;
    }
  }

  a {
    color: #fff;
  }
`;

export const Customize = styled.div`
  width: 100%;
  div {
    & + div {
      margin-top: 20px;

      p {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
      }

      ul li:nth-child(odd) {
        background: #1d1d1d;
      }

      ul li {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 14px;
        padding: 10px 15px;
        color: #fff;
      }
    }
  }

  h2 {
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: #fec63e;
    font-weight: bold;
    margin-bottom: 10px;
  }

  a {
    display: block;
    font-size: 18px;
    line-height: 30px;
    font-family: Georgia, "Times New Roman", serif;

    & + a {
      margin-top: 10px;
    }
  }
`;
