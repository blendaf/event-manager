import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { db } from '../../utils/firebaseConfig'
import ErrorBox from '../../fragments/ErrorBox'
import RSVPFormContainer from '../../containerComponents/RSVPFormContainer'
import MapContainer from '../../uiComponents/MapContainer'

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
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EventCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 500px;
  border-radius: 3px;
  margin: 50px;
  box-shadow: 7px 7px 12px rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const EventText__Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Event__Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 20px;
`

const Event__Text = styled.div`
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 100px;
`

const Button = styled.button`
  margin-top: 20px;
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

const InputForm = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`

const InputRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
`

const Input = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;
`

const ShortInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentprimary};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 100;
  padding: 10px 0;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }
`
const LongInput = styled.textarea`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentprimary};
  border-radius: 3px;
  height: 70px;
  font-size: 15px;
  font-weight: 100;
  padding-top: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: ${({ theme }) => theme.colors.accentsecondary};
  }
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
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

              <Button>RSVP</Button>
            </EventCard>
            <EventCard></EventCard>
            <EventCard>
              <InputForm action="https://Formspree.io/mgelzazl" method="POST">
                <InputRow>
                  <Input>
                    <ShortInput
                      type="text"
                      name="_replyto"
                      placeholder="Förnamn"
                    />
                  </Input>
                  <Input>
                    <ShortInput
                      type="text"
                      name="_replyto"
                      placeholder="Efternamn"
                    />
                  </Input>
                </InputRow>
                <InputRow>
                  <Input>
                    <ShortInput
                      type="text"
                      name="_replyto"
                      placeholder="Email"
                    />
                  </Input>
                  <Input>
                    <ShortInput
                      type="text"
                      name="_replyto"
                      placeholder="Telefonnummer"
                    />
                  </Input>
                </InputRow>
                <InputRow>
                  <Input>
                    <LongInput name="message" placeholder="Ditt meddelande" />
                  </Input>
                </InputRow>

                <Button type="submit">Skicka</Button>
              </InputForm>
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
