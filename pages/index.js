import Link from 'next/link'
import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.selection};
   margin: 0;
  }
`

const Background = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
`

const Title = styled.div`
  color: green;
`

export default () => (
  <React.Fragment>
    <Background>
      <Title>Hejans</Title>
    </Background>
    <GlobalStyle />
  </React.Fragment>
)
