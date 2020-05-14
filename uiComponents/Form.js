import styled from 'styled-components'
import RadioButtons from './RadioButtons'
import NumberInput from './NumberInput'
import Inputs from './Inputs'
import screenSizes from '../utils/screen-sizes'

const InputTitle = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin: 10px 0;
  width: 100%;
  text-align: center;
  font-size: 20px;

  @media only screen and (max-width: ${screenSizes.phone.max}) {
    font-size: ${({ theme }) => theme.fonts.titleSmall};
  }
`

const InputSectionWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default ({ visible }) => {
  return (
    <>
      <InputSectionWrapper>
        <InputTitle>Are you coming?</InputTitle>
        <RadioButtons />
      </InputSectionWrapper>
      <InputSectionWrapper>
        <InputTitle>No of guests</InputTitle>
        <NumberInput />
      </InputSectionWrapper>
      <Inputs />
    </>
  )
}
