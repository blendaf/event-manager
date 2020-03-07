import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.div`
  color: green;
`

const App = () => (
  <div>
    <Title>Hello World</Title>
    <Link href="/start">
      <a>Start Page</a>
    </Link>
  </div>
)

export default App
