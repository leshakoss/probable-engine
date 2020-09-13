import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { RouterContext, useRouter } from 'ui/router'
import Home from 'ui/screens/Home'
import Docs from 'ui/screens/Docs'
import NotFound from 'ui/screens/NotFound'
import { Container } from './style.css'
import './global.css?raw'

const Content = () => {
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

const UI = () => {
  const router = useRouter(location.href)

  return (
    <Container>
      <RouterContext.Provider value={router}>
        <Content />
      </RouterContext.Provider>
    </Container>
  )
}

export default UI
