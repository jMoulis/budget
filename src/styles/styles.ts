import { css } from '@emotion/core';

export default css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'nunito', sans-serif;
    color: #535252;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    font-size: 1.5rem;
  }
  #root {
    display: flex;
    background: linear-gradient(to bottom, #34add8 50%, #e87878 50%);
    height: inherit;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  g[aria-labelledby='id-50-title'] {
    /* display: none; */
  }
`;
