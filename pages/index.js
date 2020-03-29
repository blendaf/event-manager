import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../utils/firebaseConfig'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.blue};
   margin: 0;
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
  color: ${({ theme }) => theme.colors.white};
  width: 400px;
  height: 50px;
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }

  &:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    -moz-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
  }
`
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 10px;
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border: none;
  width: 200px;
  height: 40px;
  font-size: 20px;

  &:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    -moz-box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 26px 0px ${({ theme }) => theme.colors.white};
  }
`

const Index = props => {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState({})

  return (
    <React.Fragment>
      <Container>
        <CenterWrapper>
          <ID>
            <IDInput
              placeholder="Enter event id"
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            ></IDInput>
          </ID>
          <Link href="event/[pid]" as={`event/${inputValue}`}>
            <Button>Go to Event</Button>
          </Link>
        </CenterWrapper>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Index
