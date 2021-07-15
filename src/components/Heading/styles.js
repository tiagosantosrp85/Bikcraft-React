import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${(props) => (props.primary ? "#fec63e" : "#000")};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: ${(props) => (props.primary ? "#fec63e" : "#000")};
    margin: 8px auto;
  }
`;
