import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import screenSizes from '../utils/screen-sizes'
import { ScrollTo } from 'react-scroll-to'
import { ArrowDropDown as Arrow } from '@styled-icons/material-outlined/ArrowDropDown'
import { Button } from './Button'

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 700px;
  width: 100%;
  border-radius: 10px;
  position: relative;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 550px;
  }
`

const EventCard__Title = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.eventtext};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.titlephone};
  }
`

const EventCard__Text = styled.div`
  width: 60%;
  color: ${({ theme }) => theme.colors.eventtext};
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fonts.text};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.textphone};
  }
`

const EventCard__MoreInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.eventtext};
  bottom: 80px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.textphone};
    bottom: 10px;
  }
`

const ArrowDown = styled(Arrow)`
  width: 60px;
  color: ${(props) => props.theme.colors.eventtext};
  cursor: pointer;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 40px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 40px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) => theme.colors.accentprimary};

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

      <EventCard__MoreInfo>
        <div>More Info</div>
        <ArrowDown onClick={() => scroll({ top: 750, behavior: 'smooth' })} />
      </EventCard__MoreInfo>
    </EventCard>
  )
}
