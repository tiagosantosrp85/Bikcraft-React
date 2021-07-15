import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  background-color: #fec63e;
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;

  ul {
    display: flex;

    li {
      margin-left: 25px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  line-height: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
  }
`;
