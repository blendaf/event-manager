import styled from 'styled-components'
import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline'
import { MinusCircleOutline } from '@styled-icons/evaicons-outline/MinusCircleOutline'
import screenSizes from '../utils/screen-sizes'

const NumberOfGuestsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const NumberInput = styled.div`
  border: 1px solid ${(props) => props.theme.colors.accentprimary};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 0 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accentsecondary};
  }

  :hover {
    border-color: ${(props) => props.theme.colors.accentsecondary};
  }
`

const IconWrapper = styled.button`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }
`

const PlusIcon = styled(PlusCircleOutline)`
  color: ${({ theme }) => theme.colors.accentprimary};
  width: 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: ${(props) => props.theme.colors.accentsecondary};
  }
`

const MinusIcon = styled(MinusCircleOutline)`
  color: ${({ theme }) => theme.colors.accentprimary};
  width: 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: ${(props) => props.theme.colors.accentsecondary};
  }
`

export default ({ noGuests, setNoGuests }) => {
  return (
    <>
      <NumberOfGuestsWrapper>
        <IconWrapper
          disabled={noGuests < 1}
          onClick={() => {
            setNoGuests((old) => old - 1)
          }}
        >
          <MinusIcon />
        </IconWrapper>

        <NumberInput
          type="text"
          name="no-guests"
          id="no-guests"
          value={noGuests}
          onChange={() => console.log(noGuests)}
        >
          {noGuests}
        </NumberInput>

        <IconWrapper onClick={() => setNoGuests((old) => old + 1)}>
          <PlusIcon />
        </IconWrapper>
      </NumberOfGuestsWrapper>
    </>
  )
}
