import { HeaderContainer } from "./style";

import { Timer, Scroll } from "phosphor-react";

import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
