import React, { PropTypes } from 'react'
import Place from '_components/Place'

export default function PlaceList (props) {
  const places = props.places.map(p => {
    return <Place key={p.placeID} place={p} removeHandler={props.removeHandler} viewport={props.viewport} />
  })
  return (
    <main>
      {places}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired
}
