import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttoncontent};
  border-radius: 5px;
  border: none;
  padding: 12px 35px;
  font-size: 15px;
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
