import React from "react";
import Logo from "../../assets/logo.svg";

import { Link, Nav } from "./styles";

const menuList = [
  {
    id: 1,
    title: "sobre",
    link: "/sobre",
  },
  {
    id: 2,
    title: "produtos",
    link: "/produtos",
  },
  {
    id: 3,
    title: "portfólio",
    link: "/portfólio",
  },
  {
    id: 4,
    title: "contato",
    link: "/contato",
  },
  {
    id: 5,
    title: "blog",
    link: "/blog",
  },
];

const Navigation = () => {
  const pathname = window.location.pathname;

  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="Bikcraft" />
      </Link>

      <ul>
        {menuList.map((item) => (
          <li>
            <Link key={item.id} to={item.link} active={item.link === pathname}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation;
