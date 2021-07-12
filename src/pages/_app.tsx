/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/elements/_fonts.scss';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Mukta;
  }

  @media screen and (max-width: 599px){
    .displayMobile{
      display: block;
    }
    .displayMdUp{
      display: none;
    }
    .hidden{
      display: none;
    }
  }

  @media screen and (min-width: 600px){
    .displayMobile{
      display: none;
    }
    .displayMdUp{
      display: block;
    }
    .hidden{
      display: none;
    }
  }
`;
const space = ['8px', '16px', '24px', '32px', '40px', '64px', '48px'];
const theme = {
  colors: {
    primary: '#4C33C3',
    lighterPurple: '#EAE6f8',
    lighterGrey: '#F2F2F2',
    white: '#FFF',
  },
  mediaQueries: {
    small: 600,
    medium: 960,
    normal: 1024,
    large: 1280,
    xlarge: 1920,
  },
  space: {
    all: space,
    xsmall: space[0],
    small: space[1],
    medium: space[2],
    large: space[3],
    xlarge: space[4],
    xxlarge: space[5],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
