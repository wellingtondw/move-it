import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Move It</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <GlobalStyles/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
