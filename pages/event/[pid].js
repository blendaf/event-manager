import { useRouter } from 'next/router'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
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
  /* padding: 10px; */

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
`

const InfoText = styled.div`
  color: ${props => props.theme.colors.black};
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${props => props.theme.colors.blue};
`

const EventPage = props => {
  const router = useRouter()
  const { pid } = router.query

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
          <InfoText>Datum</InfoText>
          <InfoText>Tid</InfoText>
        </InfoBox>
        <InfoBox>
          <Cal />
          <InfoText>Datum</InfoText>
          <InfoText>Tid</InfoText>
        </InfoBox>
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
