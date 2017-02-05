import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { showMap } from '_actions/changePlaces'
import { changeLang } from '_actions/langChange'

import Header from '_components/Header'
import PlaceList from '_components/PlaceList'
import MapComponent from '_components/MapComponent'

class Container extends Component {
  render () {
    const { isMapVisible } = this.props

    return (
      <div className='container' >
        <Header
          lang={this.props.lang}
          showMap={this.props.showMap}
          changeLang={this.props.changeLang}
          viewport={this.props.viewport}
          isMapVisible={isMapVisible}
        />
        { isMapVisible ? <MapComponent /> : <PlaceList /> }
      </div>
    )
  }
}

Container.propTypes = {
  lang: PropTypes.string.isRequired,
  showMap: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    lang: state.lang,
    isMapVisible: state.isMapVisible,
    viewport: state.viewport
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showMap: () => dispatch( showMap() ),
    changeLang: () => dispatch( changeLang() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
