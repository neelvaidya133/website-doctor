import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{

    box-sizing:border-box ;
        margin:0 ;
        padding:0 ;
        font-family:sans-serif ;
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
`;

export default GlobalStyle;
