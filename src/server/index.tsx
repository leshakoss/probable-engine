import { https } from 'firebase-functions'
import Koa from 'koa'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from 'app'
import template from 'server/template.ejs'

const server = new Koa()

server.use(async ctx => {
  const body = ReactDOMServer.renderToString(<App />)
  ctx.body = template({ initialState: '{}', body, entry: '/static/script.js' })
})

export const app = https.onRequest(server.callback())
