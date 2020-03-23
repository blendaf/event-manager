import { useRouter } from 'next/router'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.colors.white};
   margin: 0;
  }
`

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

const EventCard = styled.div``

const Title = styled.div`
  font-size: 30px;
`

const EventPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <GlobalStyle />
      <Container>
        <EventCard>
          <Title>Välkommen till vårt Glöggmingel</Title>
        </EventCard>
      </Container>
    </>
  )
}

export default EventPage
