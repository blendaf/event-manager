import Link from 'next/link'
import styled from 'styled-components'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Button } from '../uiComponents/Button'
import screenSizes from '../utils/screen-sizes'
import Head from 'next/head'
import { transparentize } from 'polished'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${({ theme }) => theme.colors.white};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
   font-weight: 300;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const BoxLarge = styled.div`
  padding: 80px 40px;
  background-color: ${({ theme }) => theme.colors.black};
  background-color: #01a4b5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 20px 0;
  width: 800px;
  height: 300px;
  color: ${({ theme }) => theme.colors.white};
`
const BoxTitle = styled.div`
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;
`

const ID = styled.form`
  margin: 10px;
`
const IDInput = styled.input`
  border-radius: 5px;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 400px;
  height: 50px;
  font-size: 20px;
  transition: all 0.5s ease;

  :hover {
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }

  @media only screen and (max-width: 600) {
    width: 300px;
  }
`
const EventButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accentprimary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  @media only screen and (max-width: 600) {
    height: 40px;
    width: 80px;
    border-radius: 5px;
  }
`

const BoxSmall = styled.div`
  padding: 20px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.black};
`

const CreateButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease;

  :hover {
    background-color: ${(props) =>
      transparentize(0.4, props.theme.colors.black)};
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
          <BoxLarge>
            <BoxTitle>RSVP to an event?</BoxTitle>
            <ID>
              <IDInput
                placeholder="Enter event id"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              ></IDInput>
            </ID>
            <Link href="event/[pid]" as={`event/${inputValue}`}>
              <EventButton>Go to Event</EventButton>
            </Link>
          </BoxLarge>
          <BoxSmall>
            <BoxTitle>Create you own event?</BoxTitle>
            <Link href="event/[pid]" as={`event/${inputValue}`}>
              <CreateButton>Create event</CreateButton>
            </Link>
          </BoxSmall>
        </CenterWrapper>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Index
