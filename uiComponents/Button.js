import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 50px;
  font-size: 15px;

  /* @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 100px;
    height: 50px;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100px;
    height: 50px;
  } */
`
