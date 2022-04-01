import React from "react";
import { IoMdCall } from "react-icons/io";
import { GiHamburgerMenu as Ham } from "react-icons/gi";
import {
  Nav,
  NavElement,
  NavMenu,
  MenuItem,
  Call,
  BUTTON,
  Number,
  HamBurgerMenu,
} from "./NavbarStyle.js";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavElement>
          <NavMenu>
            <MenuItem activeStyle>
              <a href=""> Home </a>
              <a href=""> Service </a>
              <a href="">About me </a>
            </MenuItem>
            <Call activeStyle>
              <Number>
                <IoMdCall style={{ color: "#fff" }} />
                <p> +919408341987 </p>
              </Number>
              <BUTTON>
                <a href=""> Call Now </a>{" "}
              </BUTTON>
            </Call>
            <HamBurgerMenu>
              <Ham />
            </HamBurgerMenu>
          </NavMenu>
        </NavElement>
      </Nav>
    </>
  );
};

export default Navbar;
