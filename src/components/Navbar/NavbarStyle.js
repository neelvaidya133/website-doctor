import styled from "styled-components";

export const Nav = styled.div`
  height: 4rem;
  width: 100%;
  background-color: #3290d7;

  a {
    color: #fff;
  }
`;
export const NavElement = styled.div``;

export const NavMenu = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;

  a {
    padding-right: 3rem;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Call = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    padding-left: 1rem;
    margin: 0;
  }
`;

export const BUTTON = styled.div`
  padding-left: 1rem;
  a {
    text-decoration: none;
  }
`;

export const HamBurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
  }
`;
