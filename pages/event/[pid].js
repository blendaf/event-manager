import styled from 'styled-components'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../../fragments/ErrorBox'
import { ScrollTo } from 'react-scroll-to'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.white};
   margin: 0;
  }
`

const Container = styled.div`
  width: ${props => (props.narrow ? '40%' : '60%')};
  height: 80vh;
  margin: 0 auto;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: ${props => (props.narrow ? '60%' : '80%')};
    height: 80vh;
  }
`

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
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

const Section = styled.div`
  margin: 100px 0;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoText = styled.div`
  color: ${props => props.theme.colors.black};
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${props => props.theme.colors.blue};
`

const MapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Map = styled.div`
  background-color: ${props => props.theme.colors.blue};
  width: 200px;
  height: 200px;
  border-radius: 5px;
`

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
  top: ${props => (props.visible ? '2000px' : '1500px')};
  position: absolute;
`

const RSVPForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
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

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CheckBox = styled.input`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.blue};
`

const EventPage = ({ res }) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible(oldVisible => !oldVisible)

  if (res.error) {
    return <ErrorBox>{res.error}</ErrorBox>
  } else {
    return (
      <>
        <GlobalStyle />
        <Container>
          <EventCard>
            <Title>{res.title}</Title>
          </EventCard>

          <MoreInfo>
            <div>More Info</div>
            <ScrollTo smooth={true}>
              {({ scroll }) => (
                <ArrowDown
                  onClick={() => scroll({ x: 20, y: 700, smooth: true })}
                />
              )}
            </ScrollTo>
          </MoreInfo>
        </Container>
        <Container narrow>
          <Section>
            <InfoBox>
              <Cal />
              <InfoText>{res.date}</InfoText>
              <InfoText>{res.time}</InfoText>
            </InfoBox>
          </Section>
          <Section>
            <MapBox>
              <Map />
              <InfoBox>
                <Pin />
                <InfoText>{res.address}</InfoText>
              </InfoBox>
            </MapBox>
          </Section>
          <RSVPForm visible={visible}>
            <CheckBoxWrapper>
              <CheckBox type="checkbox" id="Yes"></CheckBox>
              <label for="Yes">Yes</label>
              <CheckBox type="checkbox" id="No"></CheckBox>
              <label for="No">No</label>
              <CheckBox type="checkbox" id="Maybe"></CheckBox>
              <label for="Maybe">Maybe</label>
            </CheckBoxWrapper>

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
            <Button onClick={toggleVisible} visible={visible}>
              RSVP
            </Button>
          </ButtonWrapper>
        </Container>
      </>
    )
  }
}

export async function getServerSideProps(context) {
  const pid = context.params.pid

  const res = await db
    .collection('eventpages')
    .doc(pid)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data()
      } else {
        return { error: true, message: 'No such event' }
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
      return { error: error, message: 'Error getting documents' }
    })
  return { props: { res: res } }
}

export default EventPage
