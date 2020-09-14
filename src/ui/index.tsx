import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { RouterContext } from 'ui/router'
import Home from 'ui/screens/Home'
import Docs from 'ui/screens/Docs'
import NotFound from 'ui/screens/NotFound'
import 'reset.css/reset.css?global'
import './global.css?global'

export const UI = () => {
  const { location } = useContext(RouterContext)

  switch (location.name) {
    case 'home':
      return <Home />

    case 'docs': {
      return <Docs />
    }

    case '404':
    default:
      return <NotFound />
  }
}
