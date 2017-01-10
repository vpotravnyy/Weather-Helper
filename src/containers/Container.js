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
      lang,
      places,
      viewport,
      addPlace,
      removePlace
    } = this.props
    console.log('Component\nlang: ', lang, '\nplaces: ', places, '\nviewport: ', viewport)
    
    return (
      <div className='container'>
        <header>
          <a href="https://darksky.net/poweredby/" target="_blank">
            <img src="/img/poweredby.png" />
          </a>
          Weather Helper
          <button onClick={addPlace}>Add city</button>
        </header>
        
        <PlaceList places={places} removeHandler={removePlace} viewport={viewport} />
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired,
  addPlace: PropTypes.func.isRequired,
  removePlace: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    places: state.places,
    viewport: state.viewport
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch(addPlace()),
    removePlace: (place) => dispatch(removePlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
