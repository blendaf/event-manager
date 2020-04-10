import styled from 'styled-components'
import { Button } from './Button'
import { useState } from 'react'
import { transparentize } from 'polished'

const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
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
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  padding-bottom: 5px;
`

const RadioButton = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  text-align: center;
  transition: all 0.5s ease;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 5px;
    right: 5px;
    height: 25px;
    width: 25px;
    border: 1px solid ${({ theme }) => theme.colors.accentprimary};
    transition: all 0.5s ease;
    border-radius: 50%;
  }

  :hover input ~ .checkmark {
    border: 1px solid ${({ theme }) => theme.colors.accentsecondary};
  }

  input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.accentprimary};
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

export default () => {
  return (
    <RadioButtons>
      <RadioWrapper>
        <Label>Yes</Label>
        <RadioButton>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </RadioButton>
      </RadioWrapper>
      <RadioWrapper>
        <Label>No</Label>
        <RadioButton>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </RadioButton>
      </RadioWrapper>
      <RadioWrapper>
        <Label>Maybe</Label>
        <RadioButton>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </RadioButton>
      </RadioWrapper>
    </RadioButtons>
  )
}
