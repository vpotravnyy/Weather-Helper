import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import getCoordsApiInit from '_listeners/getCoordsApi'
import getWeatherApiInit from '_listeners/getWeatherAPI'
import windowOnresizeListenerInit from '_listeners/onresize'
import onLangChangeListener from '_listeners/onLangChange'
import Container from '_containers/Container'

const store = createStore()

getCoordsApiInit( store )
getWeatherApiInit( store )
windowOnresizeListenerInit( store )
onLangChangeListener( store )

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
