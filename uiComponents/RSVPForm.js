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
  font-size: 20px;
`
const InputTitle = styled.div`
  color: ${(props) => props.theme.colors.blue};
  margin: 10px 0;
  width: 100%;
  text-align: center;
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
  color: ${({ theme }) => theme.colors.blue};
`

const RadioButton = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
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
    background-color: #eee;
    border-radius: 50%;
  }

  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colors.blue};
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
  border: 2px solid ${(props) => props.theme.colors.blue};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 5px;
  text-align: center;
  font-size: 20px;
  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    height: 40px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    height: 40px;
  }
`

const StyledButton = styled(Button)`
  width: 50px;
  height: 50px;
  padding: 5px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.lightblue : props.theme.colors.blue};

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 40px;
    height: 40px;
  }
`

const PlusIcon = styled(PlusCircleOutline)`
  color: ${({ theme }) => theme.colors.white};
  width: 40px;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    width: 20px;
  }
  @media only screen and (max-width: ${screenSizes.smallPhone.max}) {
    width: 20px;
  }
`

const MinusIcon = styled(MinusCircleOutline)`
  color: ${({ theme }) => theme.colors.white};
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
  border: 2px solid ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  padding: 5px;
  padding-left: 10px;
`

const ShortTextInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding-left: 10px;
`

export default ({ visible }) => {
  const [noGuests, setNoGuests] = useState(1)

  return (
    <RSVPComponent visible={visible}>
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
          <StyledButton onClick={() => setNoGuests((old) => old + 1)}>
            <PlusIcon />
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
          <StyledButton
            disabled={noGuests < 1}
            onClick={() => setNoGuests((old) => old - 1)}
          >
            <MinusIcon />
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
