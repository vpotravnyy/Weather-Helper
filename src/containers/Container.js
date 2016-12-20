import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  addPlace,
  removePlace,
  getCoords
} from '_actions/actions'


// Components
import PlaceList from '_components/PlaceList'

class Container extends Component {
  render () {
    const {
      lang,
      places,
      addPlace,
      removePlace,
      getCoords
    } = this.props
    console.log('Component\nlang: ', lang, 'places: ', places)
    if(places[0].lat === undefined && !places[0].isFetching){
      getCoords()
    }
    
    return (
      <div className='container'>
        <header>
          <a href="https://darksky.net/poweredby/" target="_blank">
            <img src="/img/poweredby.png" />
          </a>
          Weather Helper
          <button onClick={addPlace}>Add city</button>
        </header>
        
        <PlaceList places={places} removeHandler={removePlace} />
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  addPlace: PropTypes.func.isRequired,
  removePlace: PropTypes.func.isRequired,
  getCoords: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    places: state.places
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch(addPlace()),
    removePlace: (place) => dispatch(removePlace(place)),
    getCoords: () => dispatch(getCoords())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
