import styled from 'styled-components'
import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline'
import { MinusCircleOutline } from '@styled-icons/evaicons-outline/MinusCircleOutline'
import { Button } from './Button'
import { useState } from 'react'
import { transparentize } from 'polished'

const NumberOfGuestsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const NumberInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.accentprimary};
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 5px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease;

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accentsecondary};
  }

  :hover {
    border-color: ${(props) => props.theme.colors.accentsecondary};
  }
`

const PlusIcon = styled(PlusCircleOutline)`
  color: ${({ theme }) => theme.colors.accentprimary};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  width: 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: ${(props) => props.theme.colors.accentsecondary};
  }
`

const MinusIcon = styled(MinusCircleOutline)`
  color: ${({ theme }) => theme.colors.accentprimary};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  width: 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: ${(props) => props.theme.colors.accentsecondary};
  }
`
export default () => {
  const [noGuests, setNoGuests] = useState(1)

  return (
    <>
      <NumberOfGuestsWrapper>
        <MinusIcon
          onClick={() => setNoGuests((old) => old - 1)}
          disabled={noGuests < 1}
        />

        <form>
          <NumberInput
            type="text"
            name="no-guests"
            id="no-guests"
            value={noGuests}
            onChange={() => console.log(noGuests)}
          />
        </form>
        <PlusIcon onClick={() => setNoGuests((old) => old + 1)} />
      </NumberOfGuestsWrapper>
    </>
  )
}
