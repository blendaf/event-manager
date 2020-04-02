import styled from 'styled-components'
import { Checkbox } from 'styled-icons/boxicons-solid'
import Button from './Button'

const RSVPForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  margin: 40px;
  font-size: 20px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 15px;
`

const RSVPInput = styled.input`
  display: block;
  animation-name: example;
  animation-duration: 4s;
  border: 1px solid ${props => props.theme.colors.blue};
  border-radius: 10px;
  width: ${props => (props.short ? '20%' : '100%')};
  height: 50px;
  min-width: 50px;
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
  text-align: left;
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

export default ({ visible }) => {
  return (
    <RSVPForm visible={visible}>
      <CheckBoxes>
        <CheckBoxWrapper>
          <Label for="Yes">Yes</Label>
          <CheckBox type="radio" id="Yes" name="rsvp" />
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <Label for="No">No</Label>
          <CheckBox type="radio" id="No" name="rsvp" />
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <Label for="Maybe">Maybe</Label>
          <CheckBox type="radio" id="Maybe" name="rsvp" />
        </CheckBoxWrapper>
      </CheckBoxes>
      <InputWrapper>
        <InputTitle type="number">Number of guest coming</InputTitle>
        <RSVPInput placeholder="1" short />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Name of guests</InputTitle>
        <RSVPInput placeholder="Name" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Name of guests</InputTitle>
        <RSVPInput placeholder="Name" />
      </InputWrapper>
      <Button>Submit</Button>
    </RSVPForm>
  )
}
