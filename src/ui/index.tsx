import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'ui/screens/Home'
import Docs from 'ui/screens/Docs'
import NotFound from 'ui/screens/NotFound'
import { Container } from './style.css'
import './global.css?raw'

const UI = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Route component={NotFound} />
    </Switch>
  </Container>
)

export default UI
