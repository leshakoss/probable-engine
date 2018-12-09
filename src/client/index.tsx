import React from 'react'
import ReactDOM from 'react-dom'
import UI from 'ui'
import { BrowserRouter } from 'react-router-dom'
import { loop } from 'enso'
import { State } from 'utils/state'

const root = document.getElementById('root')

const render = state =>
  ReactDOM.hydrate(
    <State.Provider value={state}>
      <BrowserRouter>
        <UI />
      </BrowserRouter>
    </State.Provider>,
    root
  )

loop(window.__initialState || {}, render)
