import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
  addPlace,
  removePlace
} from '_actions/actions'
import {
  changeLang
} from '_actions/langChange'


// Components
import PlaceList from '_components/PlaceList'

class Container extends Component {
  render () {
    const {
      lang,
      addPlace,
      changeLang
    } = this.props
    const langHandler = changeLang.bind(null, lang)

    // console.log('Container:\nlang: ', lang, '\nplaces: ', places, '\nviewport: ', viewport)
    
    return (
      <div className='container'>
        <header>
          <a href="https://darksky.net/poweredby/" target="_blank">
            <img src="/img/poweredby.png" />
          </a>
          <span>Weather Helper</span>
          <button className='lang' onClick={langHandler}>{lang.toUpperCase()}</button>
          <button onClick={addPlace}>Add city</button>
        </header>
        
        <PlaceList test={'test'} />
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  addPlace: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch( addPlace() ),
    changeLang: () => dispatch( changeLang() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
