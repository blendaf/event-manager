import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

const ErrorBox = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 500px;
  padding: 30px 20px;
  border: solid 1px ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accentprimary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    margin-top: 0;
    line-height: 1;
  }

  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    max-width: 250px;
  }
`

export default ({ children }) => {
  console.log(children)

  return (
    <ErrorBox>
      <h1>Oops, an error occurred!</h1>
      <p>{children}</p>
    </ErrorBox>
  )
}
