import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  addPlace,
  removePlace
} from '_actions/actions'

// Components
import PlaceList from '_components/PlaceList'

class Container extends Component {
  render () {
    const {
      places,
      addPlace,
      removePlace
    } = this.props

    return (
      <div className='container'>
        <header>
          <a href="https://www.yahoo.com/?ilc=401" target="_blank">
            <img src="https://poweredby.yahoo.com/purple_retina.png" width="134" height="29"/>
          </a>
          Weather Helper
          <button onClick={addPlace}>Add city</button>
        </header>
        
        <PlaceList places={places} clickHandler={removePlace} />
      </div>
    )
  }
}

Container.propTypes = {
  places: PropTypes.array.isRequired,
  addPlace: PropTypes.func.isRequired,
  removePlace: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    places: state.reducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch(addPlace()),
    removePlace: (i) => dispatch(removePlace(i))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
