import styled from 'styled-components'
import dynamic from 'next/dynamic'
const MapContainer = styled.div`
  padding: 50px 0;
  > div {
    width: 300px !important;
    height: 300px !important;
  }

  @media only screen and (max-width: 1200px) {
    left: 5%;
  }

  @media only screen and (max-width: 1100px) {
    left: 2%;
    > div {
      width: 250px !important;
      height: 250px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    position: static;
    top: 0;
    left: 0;
    margin-top: 50px;
    > div {
      width: 350px !important;
      height: 350px !important;
    }
  }

  @media only screen and (max-width: 700px) {
    > div {
      width: 250px !important;
      height: 250px !important;
    }
  }

  @media only screen and (max-width: 414px) {
    > div {
      width: 200px !important;
      height: 200px !important;
    }
  }

  @media only screen and (max-width: 375px) {
    > div {
      width: 150px !important;
      height: 150px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    > div {
      width: 150px !important;
      height: 150px !important;
    }
  }
`

const DynamicComponentWithNoSSR = dynamic(
  () => import('../containerComponents/Map'),
  {
    ssr: false,
  }
)

export default ({ res }) => (
  <MapContainer>
    <DynamicComponentWithNoSSR res={res} />
  </MapContainer>
)
