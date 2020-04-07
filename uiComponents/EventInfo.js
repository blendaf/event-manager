import styled from 'styled-components'
import { CalendarToday as Calendar } from '@styled-icons/material-rounded/CalendarToday'
import { PinDrop } from '@styled-icons/material/PinDrop'
import screenSizes from '../utils/screen-sizes'

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: space-between;
  justify-content: space-evenly;
  position: absolute;
  bottom: 150px;
  right: 3%;
  z-index: 1;
  padding: 0 10px;

  @media only screen and (max-width: 1000px) {
    right: 2%;
  }

  @media only screen and (max-width: 800px) {
    position: static;
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
  }

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (max-width: 320px) {
  }
`

const MainInfo__box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`

const MainInfo__text = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.text};

  @media only screen and (max-width: 1100px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fonts.textphone};
  }

  @media only screen and (max-width: 414px) {
  }

  @media only screen and (max-width: 375px) {
  }

  @media only screen and (max-width: 320px) {
  }
`

const InfoTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;

  @media only screen and (max-width: 1100px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 800px) {
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

export default ({ res }) => {
  return (
    <>
      <EventInfo>
        <MainInfo__box>
          <Pin />
          <MainInfo__text>{res.address}</MainInfo__text>
        </MainInfo__box>
        <MainInfo__box>
          <Cal />
          <MainInfo__text>{res.date}</MainInfo__text>
          <MainInfo__text>{res.time}</MainInfo__text>
        </MainInfo__box>

        <MainInfo__box>
          <InfoTitle>Hosts</InfoTitle>
          <MainInfo__text>
            {res.hosts.map((name) => (
              <div>{name}</div>
            ))}
          </MainInfo__text>
        </MainInfo__box>
      </EventInfo>
    </>
  )
}
