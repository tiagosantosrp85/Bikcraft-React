import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 97px;
  height: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 3px;
      background: #fff;
      margin: 6px auto 10px auto;
    }
  }
`;
