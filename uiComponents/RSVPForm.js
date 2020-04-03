import styled from 'styled-components'
import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline'
import { Button } from './Button'
import { useState } from 'react'

const RSVPComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  margin: 40px;
  font-size: 20px;
`

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px;
`

const RSVPInput = styled.input`
  animation-name: example;
  animation-duration: 4s;
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;

  height: 50px;
  font-size: 20px;
  color: ${props => props.theme.colors.blue};
  padding-left: 5px;

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ::placeholder {
    color: ${props => props.theme.colors.lightblue};
  }
`

const InputTitle = styled.div`
  color: ${props => props.theme.colors.blue};
  margin: 10px 0;
  width: 100%;
  text-align: center;
`

const CheckBoxes = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`
const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 80px;
`

const CheckBox = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.blue};
`

const Label = styled.div`
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
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
  border: 1px solid ${props => props.theme.colors.blue};
  width: 50px;
  height: 40px;
  border-radius: 10px;
  margin: 0 5px;
  text-align: center;
  font-size: 20px;
`

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: ${props =>
    props.disabled ? props.theme.colors.lightblue : props.theme.colors.blue};
`

const PlusIcon = styled(PlusCircleOutline)`
  color: ${({ theme }) => theme.colors.white};
  width: 20px;
`

const StyledForm = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextInput = styled.textarea`
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  font-size: 20px;
`

const ShortTextInput = styled.input`
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  height: 40px;
  font-size: 20px;
`

export default ({ visible }) => {
  const [noGuests, setNoGuests] = useState(1)

  return (
    <RSVPComponent visible={visible}>
      <CheckBoxes>
        <CheckBoxWrapper>
          <Label>Yes</Label>
          <CheckBox type="radio" id="Yes" name="rsvp" />
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <Label>No</Label>
          <CheckBox type="radio" id="No" name="rsvp" />
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <Label>Maybe</Label>
          <CheckBox type="radio" id="Maybe" name="rsvp" />
        </CheckBoxWrapper>
      </CheckBoxes>

      <InputSectionWrapper>
        <InputTitle>No of guests</InputTitle>
        <NumberOfGuestsWrapper>
          <StyledButton onClick={() => setNoGuests(old => old + 1)}>
            <PlusIcon />
          </StyledButton>
          <form>
            <NumberInput
              placeholder="1"
              type="text"
              name="no-guests"
              id="no-guests"
              value={noGuests}
            />
          </form>
          <StyledButton
            disabled={noGuests < 1}
            onClick={() => setNoGuests(old => old - 1)}
          >
            <PlusIcon />
          </StyledButton>
        </NumberOfGuestsWrapper>
      </InputSectionWrapper>

      <InputSectionWrapper>
        <InputTitle>Names of guests</InputTitle>
        <StyledForm>
          <TextInput placeholder="Jane Doe, Johnny Appleseed,..." type="text" />
        </StyledForm>
      </InputSectionWrapper>
      <InputSectionWrapper>
        <InputTitle>Allergies</InputTitle>
        <StyledForm>
          <ShortTextInput placeholder="Gluten, dairy..." type="text" />
        </StyledForm>
      </InputSectionWrapper>

      <Button>Submit</Button>
    </RSVPComponent>
  )
}
