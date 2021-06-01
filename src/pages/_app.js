import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import Page from '../components/Layout/DefaultLayoutPage';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="6"
        options={{ showSpinner: false }}
      />
      <ThemeProvider theme={theme}>
            <Page>
              <Component {...pageProps} />
            </Page>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
