import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../../fragments/ErrorBox'
import RSVPFormContainer from '../../containerComponents/RSVPFormContainer'
import EventCard from '../../uiComponents/EventCard'
import EventInfo from '../../uiComponents/EventInfo'
import MapContainer from '../../uiComponents/MapContainer'

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

  @media only screen and (max-width: 800px) {
    position: static;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 100%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 414px) {
    align-items: space-between;
  }

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (max-width: 320px) {
  }
`

const Wrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    flex: 1;
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
            <EventInfo res={res} />
            <MapContainer res={res} />
          </Wrapper>
          <EventCard
            res={res}
            toggleVisible={toggleVisible}
            visible={visible}
            RSVPRef={RSVPRef}
          ></EventCard>
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
