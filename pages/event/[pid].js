import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import ErrorBox from '../../fragments/ErrorBox'
import MapContainer from '../../uiComponents/MapContainer'
import Form from '../../uiComponents/Form'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import { ScrollTo } from 'react-scroll-to'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) =>
     props.error ? props.theme.colors.primary : props.theme.colors.background};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;

  }
`

const Main = styled.div`
  background-image: url(${'/balloons.jpg'});
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EventCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 3px;
  margin: 50px;
  box-shadow: 7px 7px 12px rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0;
  padding-bottom: 100px;
  flex-direction: column;
`

const EventText__Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`

const Event__Title = styled.div`
  font-size: 60px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 40px;
`

const Event__Text = styled.div`
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 200px;
`

const Button = styled.button`
  margin: 20px 0;
  padding: 15px 80px;
  background-color: ${({ theme }) => theme.colors.accentprimary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease;
  font-size: 15px;

  :hover {
    background-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  :focus {
    outline: none;
  }
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-evenly;
  padding: 50px 0;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
`

const InforBox__text = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
`

const Cal = styled(Calendar)`
  height: 60px;
  color: ${(props) => props.theme.colors.black};
`

const Pin = styled(PinDrop)`
  height: 60px;
  color: ${(props) => props.theme.colors.black};
`

const Title = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.black};
  padding: 20px 0;
  font-weight: 600;
`

const EventPage = ({ res }) => {
  const RSVPRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible((oldVisible) => !oldVisible)
  const goToRSVP = (scroll) => {
    toggleVisible(scroll)
    const top = RSVPRef.current.offsetTop
    scroll({ y: top, smooth: true })
  }

  if (res.error) {
    return (
      <>
        <GlobalStyle error={res.error} />
        <ErrorBox>{res.message}</ErrorBox>
      </>
    )
  } else {
    return (
      <>
        <GlobalStyle />
        <Main>
          <Container>
            <EventCard>
              <EventText__Wrapper>
                <Event__Title>{res.title}</Event__Title>
                <Event__Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Event__Text>
              </EventText__Wrapper>
              <ScrollTo smooth={true}>
                {({ scroll }) => (
                  <Button onClick={() => goToRSVP(scroll)} visible={visible}>
                    RSVP
                  </Button>
                )}
              </ScrollTo>

              <EventInfo>
                <InfoBox>
                  <Pin />
                  <InforBox__text>{res.address}</InforBox__text>
                  <InforBox__text>lgh 4206</InforBox__text>
                </InfoBox>
                <InfoBox>
                  <Cal />
                  <InforBox__text>{res.date}</InforBox__text>
                  <InforBox__text>{res.time}</InforBox__text>
                </InfoBox>
              </EventInfo>
              <MapContainer res={res} />
            </EventCard>

            <EventCard ref={RSVPRef}>
              <Title>RSVP to the event</Title>
              <Form />
              <Button type="submit">Skicka</Button>
            </EventCard>
          </Container>
        </Main>
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
    .then(function (doc) {
      if (doc.exists) {
        return doc.data()
      } else {
        return {
          error: true,
          message:
            'There is no event with that event id. Go back and try another event id.',
        }
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error)
      return { error: error, message: 'Error getting documents' }
    })
  return { props: { res: res } }
}

export default EventPage
