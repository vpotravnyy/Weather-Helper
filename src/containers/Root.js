import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import Container from '_containers/Container'

const store = createStore()

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
