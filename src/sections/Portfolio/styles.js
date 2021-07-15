import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  padding: 40px 0;

  & > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto;
    gap: 20px;
  }

  p {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 40px 0 10px;
  }
`;
