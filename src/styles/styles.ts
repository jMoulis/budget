import { css } from '@emotion/core';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Thambi|Roboto:500,700');
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    font-size: 1.5rem;
    height: inherit;
  }
  #root {
    height: inherit;
  }

  .ql-editor .ql-size-huge {
    font-size: 10rem;
  }
  .ql-font-roboto {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  .ql-font-baloo {
    font-family: 'Baloo Thambi', cursive;
  }
  .ql-font span[data-label='Roboto']::before {
    font-family: 'Roboto';
  }
  .ql-font span[data-label='Baloo']::before {
    font-family: 'Baloo Thambi';
  }
`;
