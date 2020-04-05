import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import screenSizes from '../../utils/screen-sizes'
import ErrorBox from '../../fragments/ErrorBox'
import RSVPFormContainer from '../../containerComponents/RSVPFormContainer'
import EventCard from '../../uiComponents/EventCard'
import EventInfo from '../../uiComponents/EventInfo'
import { Button } from '../../uiComponents/Button'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) =>
     props.error
       ? props.theme.colors.primary
       : props.theme.colors.lightprimary};
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
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
          <EventCard
            res={res}
            toggleVisible={toggleVisible}
            visible={visible}
            RSVPRef={RSVPRef}
          />
          <EventInfo res={res} />
          <ButtonWrapper>
            <Button onClick={toggleVisible} visible={visible}>
              RSVP
            </Button>
          </ButtonWrapper>

          <div ref={RSVPRef}>
            <RSVPFormContainer visible={visible} />
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
