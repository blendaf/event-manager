import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  width: 100px;
  height: 50px;
  padding: 10px;
  font-size: 15px;
`

export default ({ children, onClickFunction }) => (
  <ButtonWrapper>
    <Button onClick={onClickFunction}>{children}</Button>
  </ButtonWrapper>
)
