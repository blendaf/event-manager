import styled from 'styled-components'
import React, { useState, useRef } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../../fragments/ErrorBox'
import { ScrollTo } from 'react-scroll-to'
import RSVPForm from '../../uiComponents/RSVPForm'
import { Button } from '../../uiComponents/Button'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) =>
     props.error ? props.theme.colors.blue : props.theme.colors.white};
   margin: 0;
  }
`

const Container = styled.div`
  width: ${(props) => (props.narrow ? '40%' : '80%')};
  margin: 0 auto;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: ${(props) => (props.narrow ? '60%' : '80%')};
  }
`

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.blue};
  height: 700px;
  width: 100%;
  border-radius: 10px;
  position: relative;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 400px;
    font-size: 50px;
  }
`

const Title = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.colors.white};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 15px;
  }
`

const EventCardText = styled.div`
  width: 60%;
  color: ${(props) => props.theme.colors.white};
  padding: 20px 0;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 10px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 10px;
    height: 20px;
    width: 50px;
    border-radius: 5px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`

const MoreInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  bottom: 80px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 10px;
    bottom: 10px;
  }
`

const ArrowDown = styled(Arrow)`
  width: 60px;
  color: ${(props) => props.theme.colors.white};

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 40px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 40px;
  }
`

const Section = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const InfoTitle = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 10px;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const InfoText = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  padding: 5px 20px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: 15px;
  }
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${(props) => props.theme.colors.blue};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 60px;
  }
`

const MapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Map = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-right: 80px;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    margin: 0;
  }
`

const Pin = styled(PinDrop)`
  width: 80px;
  color: ${(props) => props.theme.colors.blue};

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    margin-top: 40px;
    width: 60px;
  }
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
        <Container>
          <EventCard>
            <Title>{res.title}</Title>
            <EventCardText>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </EventCardText>
            <ScrollTo smooth={true}>
              {({ scroll }) => (
                <StyledButton
                  onClick={() => goToRSVP(scroll)}
                  visible={visible}
                >
                  RSVP
                </StyledButton>
              )}
            </ScrollTo>

            <MoreInfo>
              <div>More Info</div>
              <ArrowDown
                onClick={() => scroll({ top: 750, behavior: 'smooth' })}
              />
            </MoreInfo>
          </EventCard>
        </Container>
        <Container>
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
          <Section>
            <InfoTitle>Värdar</InfoTitle>
            <InfoBox row>
              {res.hosts.map((name) => (
                <InfoText>{name}</InfoText>
              ))}
            </InfoBox>
          </Section>
          <ButtonWrapper ref={RSVPRef}>
            <Button onClick={toggleVisible} visible={visible}>
              RSVP
            </Button>
          </ButtonWrapper>

          <div ref={RSVPRef}>
            <RSVPForm visible={visible} />
          </div>
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
