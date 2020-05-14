import styled from 'styled-components'
import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline'
import { MinusCircleOutline } from '@styled-icons/evaicons-outline/MinusCircleOutline'
import { Button } from './Button'
import { useState } from 'react'
import { transparentize } from 'polished'
import RadioButtons from './RadioButtons'
import NumberInput from './NumberInput'
import Inputs from './Inputs'

const InputTitle = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin: 10px 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
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
