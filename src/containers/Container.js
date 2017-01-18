import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addPlace } from '_actions/actions'
import { changeLang } from '_actions/langChange'

import PlaceList from '_components/PlaceList'
import HeaderTitle from '_translation/HeaderTitle'
import BtnAddPlaceTxt from '_translation/BtnAddPlaceTxt'

class Container extends Component {
  render () {
    const {
      lang,
      addPlace,
      changeLang
    } = this.props
    const langHandler = changeLang.bind(null, lang)

    return (
      <div className='container'>
        <header>
          <a href="https://darksky.net/poweredby/" target="_blank">
            <img src="/img/poweredby.png" />
          </a>
          <button className='lang' onClick={langHandler}>{lang.toUpperCase()}</button>
          <button onClick={addPlace}>
            <BtnAddPlaceTxt />
          </button>
          <HeaderTitle />
        </header>
        
        <PlaceList />
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
