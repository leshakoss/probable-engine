import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'ui/Home'
import Docs from 'ui/Docs'
import NotFound from 'ui/NotFound'

const UI = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/docs" component={Docs} />
    <Route component={NotFound} />
  </Switch>
)

export default UI
