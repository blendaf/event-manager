import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const Markers = ({ res }) => {
  return (
    <Marker latitude={res.coordinates[0]} longitude={res.coordinates[1]}>
      <img src="../public/pin.png" />
    </Marker>
  )
}

const Map = ({ res }) => {
  const [mapState, setMapState] = useState({
    viewport: {
      width: '400px',
      height: '400px',
      latitude: res.coordinates[0],
      longitude: res.coordinates[1],
      zoom: 13,
    },
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiYmxlbmRhIiwiYSI6ImNrOG1wMTAxMjBjbnozbHJ4MXkzcTQxNm8ifQ.Nn8z2m2VA-ZqWal1-Bf9aQ"
      onViewportChange={(viewport) => setMapState({ viewport })}
      {...mapState.viewport}
    >
      <Markers mapState={mapState} res={res} />
    </ReactMapGL>
  )
}

export default Map
