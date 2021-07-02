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
`;

const theme = {
  colors: {
    primary: '#4C33C3',
    lighterPurple: '#EAE6f8',
    lighterGrey: '#F2F2F2',
    white: '#FFF'
  },
  mediaQueries: {
    small: 600,
    medium: 960,
    normal: 1024,
    large: 1280,
    xlarge: 1920,
  }

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
