import styled from "styled-components";

export const Container = styled.div`
  padding-top: 70px;

  & > div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  & > p {
    text-align: center;
    padding-top: 40px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
  }

  button {
    margin-bottom: 50px;
    &:hover {
      border-color: #000;
      color: #000;
    }
  }
`;
