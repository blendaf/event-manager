import Link from 'next/link'
import styled from 'styled-components'
import React, { useState, useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Button } from '../uiComponents/Button'
import screenSizes from '../utils/screen-sizes'
import Head from 'next/head'
import { transparentize } from 'polished'
import { firebaseContext } from '../FireBaseAuthProvider'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${({ theme }) => theme.colors.white};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
   font-weight: 300;
  }
`

const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
    width: 70%;
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 80%;
  }

  @media only screen and (max-width: ${screenSizes.phone.max}) {
    width: 90%;
  }
`

const LoginButton = styled(Button)`
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.accentsecondary};
  :hover {
    background-color: ${(props) =>
      transparentize(0.4, props.theme.colors.accentsecondary)};
  }
`

const BoxLarge = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 150px 0px;
  background-color: ${({ theme }) => theme.colors.black};
  background-color: #01a4b5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    padding: 80px 0px;
  }
`
const TitleText = styled.div`
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    font-size: ${({ theme }) => theme.fonts.titleSmall};
  }
`

const ID = styled.form`
  margin: 10px;
  width: 75%;
`
const IDInput = styled.input`
  border-radius: 5px;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
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

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    height: 40px;
  }

  @media only screen and (max-width: ${screenSizes.phone.max}) {
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.textSmall};
  }
`

const BoxSmall = styled.div`
  padding: 20px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
`

const CreateButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  :hover {
    background-color: ${(props) =>
      transparentize(0.4, props.theme.colors.black)};
  }
`

const Index = () => {
  const [inputValue, setInputValue] = useState('')
  const { user, signInWithGoogle, signOut } = useContext(firebaseContext)

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
      {/* {user ? (
        <>
          <image src={user.photoURL} alt="profile picture" />
          <div> {user.displayName} </div>
          <button onClick={signOut}>sing out</button>
        </>
      ) : (
        <Link href="user/[pid]" as={`user/${inputValue}`}>
          <LoginButton onClick={signInWithGoogle}>Log in</LoginButton>
        </Link>
      )} */}
      <Link href="user/[pid]" as={`user/${inputValue}`}>
        <LoginButton onClick={signInWithGoogle}>Log in</LoginButton>
      </Link>
      <Container>
        <BoxLarge>
          <TitleText>RSVP to an event?</TitleText>
          <ID>
            <IDInput
              placeholder="Enter event id"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></IDInput>
          </ID>
          <Link href="event/[pid]" as={`event/${inputValue}`}>
            <Button>Go to Event</Button>
          </Link>
        </BoxLarge>
        <BoxSmall>
          <TitleText>Create you own event?</TitleText>
          <Link href="event/[pid]" as={`event/${inputValue}`}>
            <CreateButton>Create event</CreateButton>
          </Link>
        </BoxSmall>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Index
