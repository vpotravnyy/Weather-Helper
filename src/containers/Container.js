import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changePlaces } from '_actions/changePlaces'
import { changeLang } from '_actions/langChange'

import PlaceList from '_components/PlaceList'
import MapComponent from '_components/MapComponent'

import HeaderTitle from '_translation/HeaderTitle'
import BtnPlaces from '_translation/BtnPlaces'

class Container extends Component {
  render () {
    const {
      lang,
      changePlaces,
      changeLang,
      viewport,
      arePlacesChanging
    } = this.props
    const langHandler = changeLang.bind(null, lang)
    const addClass = arePlacesChanging ? " blur-me" : ''

    return (
      <div className='container'>
        <header className={'header' + addClass}>
          <a href="https://darksky.net/poweredby/" target="_blank" className='header__link'>
            <img src="/img/poweredby.png" className='header__img' />
          </a>
          <button onClick={langHandler} className='header__button header__button--lang'>{lang.toUpperCase()}</button>
          <BtnPlaces key={viewport.key} changePlaces={changePlaces} viewport={viewport} />
          <span className='header__title'>
            <HeaderTitle />
          </span>
        </header>
        
        { arePlacesChanging ? <MapComponent /> : <PlaceList /> }
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  changePlaces: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    viewport: state.viewport,
    arePlacesChanging: state.arePlacesChanging
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changePlaces: () => dispatch( changePlaces() ),
    changeLang: () => dispatch( changeLang() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
