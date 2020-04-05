import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../utils/screen-sizes'
import { Button } from './Button'
import dynamic from 'next/dynamic'

const Section = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const InfoTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.titlephone};
  }
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const InfoBox__contentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`

const InfoBox__text = styled.div`
  color: ${(props) => props.theme.colors.gentext};
  font-size: ${({ theme }) => theme.fonts.text};
  padding: 5px 20px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.textphone};
  }
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${(props) => props.theme.colors.icon};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 60px;
  }
`

const MapContainer = styled.div``

const Pin = styled(PinDrop)`
  width: 80px;
  color: ${(props) => props.theme.colors.icon};

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    margin-top: 40px;
    width: 60px;
  }
`

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
})

export default ({ res }) => {
  return (
    <>
      <Section row>
        <MapContainer>
          <DynamicComponentWithNoSSR />
        </MapContainer>
        <InfoBox>
          <InfoBox__contentContainer>
            <Pin />
            <InfoBox__text>{res.address}</InfoBox__text>
          </InfoBox__contentContainer>
          <InfoBox__contentContainer>
            <Cal />
            <InfoBox__text>{res.date}</InfoBox__text>
            <InfoBox__text>{res.time}</InfoBox__text>
          </InfoBox__contentContainer>
        </InfoBox>
      </Section>
      <Section>
        <InfoTitle>Hosts</InfoTitle>
        <InfoBox row>
          {res.hosts.map((name) => (
            <InfoBox__text>{name}</InfoBox__text>
          ))}
        </InfoBox>
      </Section>
    </>
  )
}
