import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addPlace } from '_actions/actions'
import { changeLang } from '_actions/langChange'

import PlaceList from '_components/PlaceList'
import HeaderTitle from '_translation/HeaderTitle'
import BtnAddPlace from '_translation/BtnAddPlace'

class Container extends Component {
  render () {
    const {
      lang,
      addPlace,
      changeLang,
      width
    } = this.props
    const langHandler = changeLang.bind(null, lang)

    return (
      <div className='container'>
        <header className='header'>
          <a href="https://darksky.net/poweredby/" target="_blank" className='header__link'>
            <img src="/img/poweredby.png" className='header__img' />
          </a>
          <button onClick={langHandler} className='header__button header__button--lang'>{lang.toUpperCase()}</button>
          <BtnAddPlace key={width} addPlace={addPlace} width={width} />
          <span className='header__title'>
            <HeaderTitle />
          </span>
        </header>
        
        <PlaceList />
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  addPlace: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    width: state.viewport.width
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPlace: () => dispatch( addPlace() ),
    changeLang: () => dispatch( changeLang() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
