import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import Container from '_containers/Container'
import getApiDataInit from '_listeners/getApiData'
import windowOnresizeListenerInit from '_listeners/onresize'

const store = createStore()

getApiDataInit( store )
windowOnresizeListenerInit( store )

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
