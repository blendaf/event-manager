import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttoncontent};
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 50px;
  font-size: ${({ theme }) => theme.fonts.button};
  cursor: pointer;

  :focus {
    outline: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.buttonhover};
    color: ${({ theme }) => theme.colors.buttoncontent};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.buttonphone};
  }
`
