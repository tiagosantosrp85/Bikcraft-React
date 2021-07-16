import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0 20px;

  & + div {
    margin-top: 80px;
  }
`;

export const Banner = styled(Link)`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #fff;
    margin: 6px auto 8px auto;
  }

  span {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export const Icon = styled(Link)`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
