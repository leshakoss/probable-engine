import { https } from 'firebase-functions'
import Koa from 'koa'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import UI from 'ui'
import template from 'server/template.ejs'
import { StaticRouter, StaticRouterContext } from 'react-router'
import { State } from 'utils/state'

const server = new Koa()

server.use(async context => {
  const routerContext: StaticRouterContext = {}
  const state = {}
  const body = ReactDOMServer.renderToString(
    <State.Provider value={state}>
      <StaticRouter location={context.url} context={routerContext}>
        <UI />
      </StaticRouter>
    </State.Provider>
  )

  if (routerContext.url) {
    context.status = 301
    context.redirect(routerContext.url)
  } else {
    context.body = template({
      initialState: JSON.stringify(state),
      body,
      entry: '/static/script.js'
    })
  }
})

export const app = https.onRequest(server.callback())
