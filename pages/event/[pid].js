import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../../fragments/ErrorBox'
import RSVPFormContainer from '../../containerComponents/RSVPFormContainer'
// import EventCard from '../../uiComponents/EventCard'
// import EventInfo from '../../uiComponents/EventInfo'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../containerComponents/Map'),
  {
    ssr: false,
  }
)

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) =>
     props.error ? props.theme.colors.primary : props.theme.colors.background};
   margin: 0;
   font-family: apercu-pro, "Apercu Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;

  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media only screen and (max-width: ${screenSizes.tablet.min}) {
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    position: static;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: row;
    height: 100%;
    margin: 0 auto;
  }
`

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 500px;
  width: 1000px;
  position: relative;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
    width: 900px;
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 800px;
  }

  @media only screen and (max-width: ${screenSizes.tablet.min}) {
    width: 50%;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 200px;
    position: static;
  }
`

const EventInfo = styled.div`
  height: 600px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  bottom: 150px;
  right: 50px;
  z-index: 1;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media only screen and (max-width: ${screenSizes.tablet.min}) {
    position: static;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    position: static;
    width: 200px;
  }
`

const MapContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
    left: 5%;
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    left: 2%;
    top: 15%;
  }

  @media only screen and (max-width: ${screenSizes.tablet.min}) {
    position: static;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    position: static;
    top: 0;
    left: 0;
    margin-top: 50px;
  }
  > div {
    width: 100px !important;
    height: 100px !important;
  }
`

const Wrapper = styled.div`
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`

const EventPage = ({ res }) => {
  const RSVPRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible((oldVisible) => !oldVisible)

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
          <Wrapper>
            <EventInfo />
            <MapContainer>
              <DynamicComponentWithNoSSR res={res} />
            </MapContainer>
          </Wrapper>
          <EventCard
            res={res}
            toggleVisible={toggleVisible}
            visible={visible}
            RSVPRef={RSVPRef}
          ></EventCard>

          {/* <EventInfo res={res} /> */}
        </Container>

        <div ref={RSVPRef}>
          <RSVPFormContainer visible={visible} />
        </div>
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
