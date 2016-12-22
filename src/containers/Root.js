import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '_redux/createStore'
import Container from '_containers/Container'
import getApiData from '_listeners/getApiData'

const store = createStore()

const unsubscribeGetApiData = store.subscribe(() => {
  getApiData( store )
})
getApiData( store )

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
