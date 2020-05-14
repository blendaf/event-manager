import styled from 'styled-components'
import React, { useState, useRef, useEffect } from 'react'
import screenSizes from '../utils/screen-sizes'

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

export default () => {
  return (
    <InputForm action="https://Formspree.io/mgelzazl" method="POST">
      <InputRow>
        <Input>
          <ShortInput type="text" name="_replyto" placeholder="Förnamn" />
        </Input>
        <Input>
          <ShortInput type="text" name="_replyto" placeholder="Efternamn" />
        </Input>
      </InputRow>
      <InputRow>
        <Input>
          <ShortInput type="text" name="_replyto" placeholder="Email" />
        </Input>
        <Input>
          <ShortInput type="text" name="_replyto" placeholder="Telefonnummer" />
        </Input>
      </InputRow>
      <InputRow>
        <Input>
          <LongInput name="message" placeholder="Ditt meddelande" />
        </Input>
      </InputRow>
    </InputForm>
  )
}
