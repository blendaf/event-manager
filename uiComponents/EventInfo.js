import styled from 'styled-components'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../utils/screen-sizes'
import dynamic from 'next/dynamic'

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 50px;
  height: 700px;
  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    height: 700px;
    flex: 0 1 auto;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex: 0 1 auto;
    height: 700px;
  }
`

const MainInfo__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    flex-direction: row;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
  }
`

const MapContainer = styled.div``

const MainInfo = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) => (props.row ? '60px 0' : '0')};
  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    flex-direction: column;
    margin: ${(props) => (props.row ? '60px 0' : '80px 0')};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    flex-direction: column;
    margin: ${(props) => (props.row ? '60px 0' : '80px 0')};
  }
`

const MainInfo__box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const MainInfo__text = styled.div`
  color: ${(props) => props.theme.colors.gentext};
  font-size: ${({ theme }) => theme.fonts.text};
  padding: 5px 20px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.textphone};
  }
`

const InfoTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.titlephone};
  }
`

const Cal = styled(Calendar)`
  width: 80px;
  color: ${(props) => props.theme.colors.icon};

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 60px;
  }
`

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

const DynamicComponentWithNoSSR = dynamic(
  () => import('../containerComponents/Map'),
  {
    ssr: false,
  }
)

export default ({ res }) => {
  return (
    <>
      <EventInfo>
        <MainInfo__wrapper>
          <MapContainer>
            <DynamicComponentWithNoSSR res={res} />
          </MapContainer>
          <MainInfo row>
            <MainInfo__box>
              <Pin />
              <MainInfo__text>{res.address}</MainInfo__text>
            </MainInfo__box>
            <MainInfo__box>
              <Cal />
              <MainInfo__text>{res.date}</MainInfo__text>
              <MainInfo__text>{res.time}</MainInfo__text>
            </MainInfo__box>
          </MainInfo>
        </MainInfo__wrapper>

        <MainInfo>
          <InfoTitle>Hosts</InfoTitle>
          <MainInfo__box row>
            {res.hosts.map((name) => (
              <MainInfo__text>{name}</MainInfo__text>
            ))}
          </MainInfo__box>
        </MainInfo>
      </EventInfo>
    </>
  )
}
