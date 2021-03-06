import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../providers/auth'

import GlobalStyle from '../styles/global';
import theme from '../styles/theme'

import 'bootstrap/dist/css/bootstrap.min.css';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
