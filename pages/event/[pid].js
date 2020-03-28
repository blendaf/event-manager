import { useRouter } from 'next/router'
import styled from 'styled-components'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../../utils/screen-sizes'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.white};
   margin: 0;
  }
`

const Container = styled.div`
  width: ${props => (props.narrow ? '40%' : '60%')};
  height: 100vh;
  margin: 0 auto;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: ${props => (props.narrow ? '40%' : '80%')};
  }
`

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  background-color: ${props => props.theme.colors.blue};
  height: 400px;
  width: 100%;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 200px;
    font-size: 50px;
  }
`

const Title = styled.div`
  font-size: 30px;
  color: ${props => props.theme.colors.white};
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 15px;
  }
`

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const ArrowDown = styled(Arrow)`
  width: 80px;
  color: ${props => props.theme.colors.black};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 50px;
`

const InfoText = styled.div`
  color: ${props => props.theme.colors.black};
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${props => props.theme.colors.blue};
`

const MapBox = styled.div``

const Pin = styled(PinDrop)`
  width: 80px;
  color: ${props => props.theme.colors.blue};
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  width: 100px;
  height: 50px;
  transition: top 1s;
  top: ${props => (props.visibility ? '2000px' : '1500px')};
  position: absolute;
`

const RSVPForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visibility ? 'visible' : 'hidden')};
  margin: 20px;
`
const RSVPInput = styled.input`
  display: block;
  margin: 10px;
  animation-name: example;
  animation-duration: 4s;
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  height: 50px;

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const InputTitle = styled.h3`
  color: ${props => props.theme.colors.blue};
  margin: 0;
  width: 100%;
  text-align: left;
`

const EventPage = props => {
  const router = useRouter()
  const { pid } = router.query
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => setVisibility(visible => !visible)

  console.log(`test:${props.pid}`)

  return (
    <>
      <GlobalStyle />
      <Container>
        <EventCard>
          <Title>{props.title}</Title>
        </EventCard>
        <MoreInfo>
          <div>More Info</div>

          <ArrowDown />
        </MoreInfo>
      </Container>

      <Container narrow>
        <InfoBox>
          <Cal />
          <InfoText>{props.date}</InfoText>
          <InfoText>{props.time}</InfoText>
        </InfoBox>
        <MapBox>
          <InfoBox>
            <Pin />
            <InfoText>{props.address}</InfoText>
          </InfoBox>
        </MapBox>

        <RSVPForm visibility={visibility}>
          <InputTitle>Name</InputTitle>
          <RSVPInput></RSVPInput>
          <InputTitle>Name</InputTitle>
          <RSVPInput></RSVPInput>
          <InputTitle>Name</InputTitle>
          <RSVPInput></RSVPInput>
          <InputTitle>Name</InputTitle>
          <RSVPInput></RSVPInput>
        </RSVPForm>
        <ButtonWrapper>
          <Button onClick={toggleVisibility} visibility={visibility}>
            RSVP
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  )
}

EventPage.getInitialProps = async function() {
  const res = await db
    .collection('eventpages')
    .doc('UpJR9oHQwOXs8Y6DX2rL')
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data()
      } else {
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    })

  console.log(res)

  return res
}

export default EventPage
