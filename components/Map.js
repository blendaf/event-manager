import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
  const [mapState, setMapState] = useState({
    viewport: {
      width: '400px',
      height: '400px',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiYmxlbmRhIiwiYSI6ImNrOG1wMTAxMjBjbnozbHJ4MXkzcTQxNm8ifQ.Nn8z2m2VA-ZqWal1-Bf9aQ"
      onViewportChange={(viewport) => setMapState({ viewport })}
      {...mapState.viewport}
    />
  )
}

export default Map
