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
    justify-content: space-between;
    align-items: flex-end;
  }
`

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 500px;
  width: 1000px;
  position: relative;

  @media only screen and (max-width: 1100px) {
    width: 90%;
  }

  @media only screen and (max-width: 800px) {
    width: 350px;
    position: static;
  }

  @media only screen and (max-width: 414px) {
    width: 200px;
  }

  @media only screen and (max-width: 375px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 150px;
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

  @media only screen and (max-width: 800px) {
    width: 350px;
    position: static;
  }

  @media only screen and (max-width: 414px) {
    width: 200px;
  }

  @media only screen and (max-width: 375px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 150px;
  }
`

const MapContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 18%;
  z-index: 1;
  > div {
    width: 300px !important;
    height: 300px !important;
  }

  @media only screen and (max-width: 1200px) {
    left: 5%;
  }

  @media only screen and (max-width: 1100px) {
    left: 2%;
    > div {
      width: 250px !important;
      height: 250px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    position: static;
    top: 0;
    left: 0;
    margin-top: 50px;
    > div {
      width: 350px !important;
      height: 350px !important;
    }
  }

  @media only screen and (max-width: 414px) {
    > div {
      width: 200px !important;
      height: 200px !important;
    }
  }

  @media only screen and (max-width: 375px) {
    > div {
      width: 150px !important;
      height: 150px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    > div {
      width: 150px !important;
      height: 150px !important;
    }
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
