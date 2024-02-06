import { createGlobalStyle, styled } from "styled-components";

import 'react-loading-skeleton/dist/skeleton.css'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme['gray-300']};
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`

export const CardItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 12px;

  @media (min-width:  ${props => props.theme.sizeDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`