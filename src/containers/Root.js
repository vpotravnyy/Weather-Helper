import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import getApiDataInit from '_listeners/getApiData'
import windowOnresizeListenerInit from '_listeners/onresize'
import onLangChangeListener from '_listeners/onLangCgange'
import Container from '_containers/Container'

const store = createStore()

getApiDataInit( store )
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
