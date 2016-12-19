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
      state,
      addPlace,
      removePlace
    } = this.props

    return (
      <div className='container'>
        <header>
          <a href="https://darksky.net/poweredby/" target="_blank">
            <img src="/img/poweredby.png" />
          </a>
          Weather Helper
          <button onClick={addPlace}>Add city</button>
        </header>
        
        <PlaceList places={state.places} clickHandler={removePlace} />
      </div>
    )
  }
}

Container.propTypes = {
  state: PropTypes.object.isRequired,
  addPlace: PropTypes.func.isRequired,
  removePlace: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    state: state.reducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch(addPlace()),
    removePlace: (place) => dispatch(removePlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
