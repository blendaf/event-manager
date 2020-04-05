import Link from 'next/link'
import styled from 'styled-components'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Button } from '../uiComponents/Button'
import screenSizes from '../utils/screen-sizes'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) => props.theme.colors.primary};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
`

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 200px;
`
const ID = styled.form`
  margin: 10px;
`
const IDInput = styled.input`
  border-radius: 5px;
  border: solid 3px ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 400px;
  height: 50px;
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.accentprimary};
    opacity: 1;
  }

  &:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    -moz-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
  }
`
const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) => theme.colors.accentprimary};

  :hover {
    background-color: ${(props) => props.theme.colors.transwhite};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 40px;
    width: 80px;
    border-radius: 5px;
  }
`

const Index = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState({})

  return (
    <React.Fragment>
      <Head>
        <title>Event manager</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <CenterWrapper>
          <ID>
            <IDInput
              placeholder="Enter event id"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></IDInput>
          </ID>
          <Link href="event/[pid]" as={`event/${inputValue}`}>
            <StyledButton>Go to Event</StyledButton>
          </Link>
        </CenterWrapper>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Index
