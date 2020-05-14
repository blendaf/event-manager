import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import { FireBaseAuthProvider } from '../FireBaseAuthProvider'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <FireBaseAuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </FireBaseAuthProvider>
    )
  }
}
