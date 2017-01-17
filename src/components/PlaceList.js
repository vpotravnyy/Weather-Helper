import React, { PropTypes } from 'react'
import Place from '_components/Place'
import { connect } from 'react-redux'

const PlaceList = (props) => {
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

function mapStateToProps (state) {
  return {
    places: state.places
  }
}
function mapDispatchToProps (dispatch) {
  return {
    removeHandler: (place) => dispatch(removePlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList)