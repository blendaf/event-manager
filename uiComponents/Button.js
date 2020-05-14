import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accentprimary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: none;
  padding: 12px 35px;
  font-size: ${({ theme }) => theme.fonts.button};
  cursor: pointer;
  transition: all 0.5s ease;

  :focus {
    outline: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  @media only screen and (max-width: ${screenSizes.phone.max}) {
    font-size: ${({ theme }) => theme.fonts.buttonSmall};
  }
`
