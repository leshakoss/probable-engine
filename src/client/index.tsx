import React from 'react'
import ReactDOM from 'react-dom'
import UI from 'ui'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <UI />
  </BrowserRouter>,
  document.getElementById('root')
)
