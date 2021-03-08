import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import screenSizes from '../utils/screen-sizes'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media only screen and (max-width: ${screenSizes.laptop.max}) {
    padding: 0 50px;
  }
  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    padding: 0 20px;
    width: 60%;
  }
`

const InputRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    flex-direction: column;
    padding: 0;
  }
`

const Input = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 5px;

  @media only screen and (max-width: ${screenSizes.tablet.max}) {
    padding: 10px 0;
  }
`

const ShortInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentprimary};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 100;
  padding: 10px 0;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: ${({ theme }) => theme.colors.accentsecondary};
  }

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }
`
const LongInput = styled.textarea`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentprimary};
  border-radius: 3px;
  height: 70px;
  font-size: 15px;
  font-weight: 100;
  padding-top: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.5s ease;
  :hover {
    border-color: ${({ theme }) => theme.colors.accentsecondary};
  }
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentprimary};
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

export default ({ inputValue, setInputValue }) => {
  console.log(inputValue.name)
  const classes = useStyles()
  return (
    <>
      {/* <InputForm className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </InputForm> */}
      <InputForm>
        <InputRow>
          <Input>
            <ShortInput
              type="text"
              placeholder="Name"
              value={inputValue.name}
              onChange={(event) => {
                const newName = event.target.value
                setInputValue(({ name, ...rest }) => ({
                  name: newName,
                  ...rest,
                }))
              }}
            />
          </Input>
          <Input>
            <ShortInput
              type="text"
              name="_replyto"
              placeholder="Last Name"
              value={inputValue.lastName}
              onChange={(event) => {
                const newLastName = event.target.value
                setInputValue(({ lastName, ...rest }) => ({
                  lastName: newLastName,
                  ...rest,
                }))
              }}
            />
          </Input>
        </InputRow>
        <InputRow>
          <Input>
            <ShortInput
              type="text"
              name="_replyto"
              placeholder="Email"
              value={inputValue.email}
              onChange={(event) => {
                const newEmail = event.target.value
                setInputValue(({ email, ...rest }) => ({
                  email: newEmail,
                  ...rest,
                }))
              }}
            />
          </Input>
          <Input>
            <ShortInput
              type="text"
              name="_replyto"
              placeholder="Phone number"
              value={inputValue.number}
              onChange={(event) => {
                const newNumber = event.target.value
                setInputValue(({ number, ...rest }) => ({
                  number: newNumber,
                  ...rest,
                }))
              }}
            />
          </Input>
        </InputRow>
        <InputRow>
          <Input>
            <LongInput
              name="message"
              placeholder="Names of guests"
              value={inputValue.namesGuests}
              onChange={(event) => {
                const newNamesGuests = event.target.value
                setInputValue(({ namesGuests, ...rest }) => ({
                  namesGuests: newNamesGuests,
                  ...rest,
                }))
              }}
            />
          </Input>
        </InputRow>
        <InputRow>
          <Input>
            <LongInput
              name="message"
              placeholder="Your message"
              value={inputValue.message}
              onChange={(event) => {
                const newMessage = event.target.value
                setInputValue(({ message, ...rest }) => ({
                  message: newMessage,
                  ...rest,
                }))
              }}
            />
          </Input>
        </InputRow>
      </InputForm>
    </>
  )
}
