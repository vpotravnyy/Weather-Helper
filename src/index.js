import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from '_containers/Root'
import shim from '_utils/intlPolyfill'

const run = () => {
  render(
    <Root />,
    document.getElementById('root')
  )
}

shim( run )