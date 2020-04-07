import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import { ScrollTo } from 'react-scroll-to'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { Button } from './Button'

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  width: 1000px;

  position: relative;

  @media only screen and (max-width: 1100px) {
    width: 90%;
  }

  @media only screen and (max-width: 800px) {
    position: static;
    flex: 1;
  }

  @media only screen and (max-width: 414px) {
  }

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (max-width: 320px) {
  }
`

const EventCard__Title = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.eventtext};
  margin-top: 80px;

  @media only screen and (max-width: 320px) {
    font-size: ${({ theme }) => theme.fonts.titlephone};
    padding: 0;
  }
`

const EventCard__Text = styled.div`
  color: ${({ theme }) => theme.colors.eventtext};
  font-size: ${({ theme }) => theme.fonts.text};
  width: 400px;

  @media only screen and (max-width: 1100px) {
  }

  @media only screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.textphone};
    width: auto;
    padding: 0 20px;
  }

  @media only screen and (max-width: 414px) {
  }

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (max-width: 320px) {
  }
`

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) => theme.colors.eventbuttoncontent};
  margin-bottom: 80px;

  :hover {
    background-color: ${(props) => props.theme.colors.eventbuttonhover};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 40px;
    width: 80px;
    border-radius: 5px;
  }
`

export default ({ res, toggleVisible, visible, RSVPRef }) => {
  const goToRSVP = (scroll) => {
    toggleVisible(scroll)
    const top = RSVPRef.current.offsetTop
    scroll({ y: top, smooth: true })
  }

  return (
    <EventCard>
      <EventCard__Title>{res.title}</EventCard__Title>
      <EventCard__Text>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </EventCard__Text>
      <ScrollTo smooth={true}>
        {({ scroll }) => (
          <StyledButton onClick={() => goToRSVP(scroll)} visible={visible}>
            RSVP
          </StyledButton>
        )}
      </ScrollTo>
    </EventCard>
  )
}
