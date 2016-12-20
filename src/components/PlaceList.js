import React, { PropTypes } from 'react'
import Place from '_components/Place'

export default function PlaceList (props) {
  const places = props.places.map(p => {
    return <Place key={p.placeID} place={p} removeHandler={props.removeHandler} />
  })
  return (
    <main>
      {places}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired,
  removeHandler: PropTypes.func.isRequired
}
