import { h, render } from 'preact'
import { UI } from 'ui'
import { RouterContext, useRouter } from 'ui/router'
import firebase from 'firebase'
import { FIREBASE_APP } from 'FIXME_keys'

firebase.initializeApp(FIREBASE_APP)

const ClientUI = () => {
  const router = useRouter(location.href)

  return (
    <RouterContext.Provider value={router}>
      <UI />
    </RouterContext.Provider>
  )
}

render(<ClientUI />, document.body)
