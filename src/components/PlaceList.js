import React, { PropTypes } from 'react'
import Place from '_components/Place'
import { connect } from 'react-redux'

const PlaceList = (props) => {
  const places = props.places.map(p => {
    return <Place key={p.placeID} place={p} />
  })
  return (
    <main>
      {places}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps)(PlaceList)