import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../utils/firebaseConfig'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.white};
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
  border: solid 3px ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
  width: 400px;
  height: 50px;
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue};
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue};
  }
`
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightgreen};
  margin: 10px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: none;
  width: 80px;
  height: 40px;
  font-size: 20px;
`

const Index = props => {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState({})
  const test = () =>
    db
      .collection('eventpages')
      .where('pid', '==', inputValue)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // setData(doc.data())
        })
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })

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
            <Button onClick={test}>GO</Button>
          </Link>
        </CenterWrapper>
      </Container>

      <GlobalStyle />
    </React.Fragment>
  )
}

export default Index
