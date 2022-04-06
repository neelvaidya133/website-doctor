import React from "react";
import { IoMdCall } from "react-icons/io";
import { GiHamburgerMenu as Ham } from "react-icons/gi";
import { Link } from "react-scroll";
import Logo from "../Assets/devetreeLogo.png";
import {
  Nav,
  NavElement,
  NavMenu,
  MenuItem,
  Call,
  BUTTON,
  Number,
  HamBurgerMenu,
  LogoWrapper,
} from "./NavbarStyle.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavElement>
          <NavMenu>
            <MenuItem activeStyle>
              <LogoWrapper>
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={Logo}
                  alt="logo"
                />
              </LogoWrapper>
              <Link href="/"> Home </Link>{" "}
              <Link href="/Service"> Service </Link>
              <Link href="/about">About me </Link>
            </MenuItem>
            <Call>
              <Number>
                <IoMdCall style={{ color: "#000" }} />
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
