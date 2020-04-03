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
import RSVPForm from '../../uiComponents/RSVPForm'
import Button from '../../uiComponents/Button'

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
  margin-top: 20px;
  font-size: 20px;
`

const ArrowDown = styled(Arrow)`
  width: 60px;
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

          <Button onClickFunction={toggleVisible} visible={visible}>
            RSVP
          </Button>
          <RSVPForm visible={visible} />
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
