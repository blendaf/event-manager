import styled from 'styled-components'
import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline'
import { MinusCircleOutline } from '@styled-icons/evaicons-outline/MinusCircleOutline'
import { Button } from './Button'
import { useState } from 'react'
import screenSizes from '../utils/screen-sizes'

const RSVPComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  margin: 40px;
`
const InputTitle = styled.div`
  color: ${(props) => props.theme.colors.inputtitle};
  margin: 10px 0;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.title};
`

const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 60px;
`

const Label = styled.div`
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.gentext};
  font-size: ${({ theme }) => theme.fonts.input};
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.inputphone};
  }
`

const RadioButton = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.input};
  user-select: none;
  text-align: center;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 5px;
    right: 5px;
    height: 25px;
    width: 25px;
    /* border: 2px solid ${({ theme }) => theme.colors.accentprimary}; */
    background-color: ${({ theme }) => theme.colors.offinputbackground};

    border-radius: 50%;
  }

  :hover input ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colors.accentprimary};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

const InputSectionWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const NumberOfGuestsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const NumberInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 5px;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.input};
  background-color: ${({ theme }) => theme.colors.inputbackground};

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.focus};
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    height: 40px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.inputphone};
  }
`

const StyledButton = styled(Button)`
  width: 50px;
  height: 50px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  font-size: ${({ theme }) => theme.fonts.button};

  :hover {
    background-color: ${({ theme }) => theme.colors.buttonhover};
  }

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.buttonphone};
  }
`

const PlusIcon = styled(PlusCircleOutline)`
  color: ${({ theme }) => theme.colors.buttoncontent};
  width: 40px;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 20px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 20px;
  }
`

const MinusIcon = styled(MinusCircleOutline)`
  color: ${({ theme }) => theme.colors.buttoncontent};
  width: 40px;
  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 20px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 20px;
  }
`

const StyledForm = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 80%;
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 100%;
  }
`
const TextInput = styled.textarea`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  font-size: ${({ theme }) => theme.fonts.input};
  padding: 5px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.inputbackground};

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.focus};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputplaceholder};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    font-size: ${({ theme }) => theme.fonts.inputphone};
  }
`

const ShortTextInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 100%;
  height: 40px;
  font-size: ${({ theme }) => theme.fonts.input};
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.inputbackground};

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.focus};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputplaceholder};
  }

  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 40px;
    font-size: ${({ theme }) => theme.fonts.inputphone};
  }
`

export default ({ visible }) => {
  const [noGuests, setNoGuests] = useState(1)

  return (
    <RSVPComponent visible={visible}>
      <InputTitle>Are you coming?</InputTitle>
      <RadioButtons>
        <RadioWrapper>
          <Label>Yes</Label>
          <RadioButton>
            <input
              type="radio"
              name="radio"
              onChange={console.log('onChange')}
            />
            <span className="checkmark"></span>
          </RadioButton>
        </RadioWrapper>
        <RadioWrapper>
          <Label>No</Label>
          <RadioButton>
            <input
              type="radio"
              name="radio"
              onChange={console.log('onChange')}
            />
            <span className="checkmark"></span>
          </RadioButton>
        </RadioWrapper>
        <RadioWrapper>
          <Label>Maybe</Label>
          <RadioButton>
            <input
              type="radio"
              name="radio"
              onChange={console.log('onChange')}
            />
            <span className="checkmark"></span>
          </RadioButton>
        </RadioWrapper>
      </RadioButtons>

      <InputSectionWrapper>
        <InputTitle>No of guests</InputTitle>
        <NumberOfGuestsWrapper>
          <StyledButton
            disabled={noGuests < 1}
            onClick={() => setNoGuests((old) => old - 1)}
          >
            <MinusIcon />
          </StyledButton>
          <form>
            <NumberInput
              placeholder="1"
              type="text"
              name="no-guests"
              id="no-guests"
              value={noGuests}
              onChange={() => console.log(noGuests)}
            />
          </form>
          <StyledButton onClick={() => setNoGuests((old) => old + 1)}>
            <PlusIcon />
          </StyledButton>
        </NumberOfGuestsWrapper>
      </InputSectionWrapper>

      <InputSectionWrapper>
        <InputTitle>Names of guests</InputTitle>
        <StyledForm>
          <TextInput
            placeholder="Jane Doe, Johnny Appleseed,..."
            type="text"
            onChange={console.log('onChange')}
          />
        </StyledForm>
      </InputSectionWrapper>
      <InputSectionWrapper>
        <InputTitle>Allergies</InputTitle>
        <StyledForm>
          <ShortTextInput
            placeholder="Gluten, dairy..."
            type="text"
            onChange={console.log('onChange')}
          />
        </StyledForm>
      </InputSectionWrapper>
      <InputSectionWrapper>
        <InputTitle>Other information</InputTitle>
        <StyledForm>
          <TextInput
            placeholder="..."
            type="text"
            onChange={console.log('onChange')}
          />
        </StyledForm>
      </InputSectionWrapper>

      <Button>Submit</Button>
    </RSVPComponent>
  )
}
