import styled from 'styled-components'
import React, { useState } from 'react'
import RadioButtons from './RadioButtons'
import NumberInput from './NumberInput'
import Inputs from './Inputs'
import screenSizes from '../utils/screen-sizes'
import { Button } from '../uiComponents/Button'
import { db } from '../utils/firebaseConfig'

const FormWrapper = styled.div`
  position: relative;
`

const ConfirmationModal = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  border-radius: 5px;
  text-align: center;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -50px;
  transition: opacity ${(props) => (props.show ? '0' : '0.6s')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`

const InputTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
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
const StyledButton = styled(Button)`
  margin: 0 auto;
  padding: 15px 80px;
`

export default ({ visible, pid }) => {
  const [show, setShow] = useState(false)
  const toggleModal = () => setShow((oldShow) => !oldShow)
  const [noGuests, setNoGuests] = useState(1)
  const [rsvp, setRsvp] = useState('no')
  const [inputValue, setInputValue] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    namesGuests: '',
    message: '',
  })

  function myFunction() {
    setTimeout(function () {
      toggleModal()
    }, 500)
  }

  const submitInfo = () => {
    db.collection('rsvps')
      .add({
        pid: pid,
        personalInfo: inputValue,
        numberOfGuests: noGuests,
        rsvpStatus: rsvp,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })

    setInputValue({
      name: '',
      lastName: '',
      email: '',
      number: '',
      namesGuests: '',
      message: '',
    })
    setNoGuests(1)
    setRsvp('no')
    toggleModal()
    myFunction()
  }
  return (
    <FormWrapper>
      <ConfirmationModal show={show}>RSVP sent!</ConfirmationModal>
      <InputSectionWrapper>
        <InputTitle>Are you coming?</InputTitle>
        <RadioButtons rsvp={rsvp} setRsvp={setRsvp} />
      </InputSectionWrapper>
      <InputSectionWrapper>
        <InputTitle>No of guests</InputTitle>
        <NumberInput noGuests={noGuests} setNoGuests={setNoGuests} />
      </InputSectionWrapper>
      <Inputs inputValue={inputValue} setInputValue={setInputValue} />

      <StyledButton onClick={submitInfo} type="submit">
        Submit
      </StyledButton>
    </FormWrapper>
  )
}
