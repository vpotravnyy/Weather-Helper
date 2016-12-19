import React, { PropTypes } from 'react'
import Place from '_components/Place'

export default function PlaceList (props) {
  const places = props.places.map(p => {
    return <Place key={p.placeID} data={p} clickHandler={props.clickHandler} index={p.placeID}/>
  })
  return (
    <main>
      {places}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
}
