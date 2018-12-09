import React, { useContext, useCallback } from 'react'
import { act } from 'enso'
import produce from 'immer'

const State = React.createContext({})
export { State }

export const useSharedState = () => {
  const update = useCallback(callback => act(produce(callback)), [])

  return [useContext(State), update]
}
