import { useContext, useCallback } from 'react'
import { get, set } from 'lodash'
import { act } from 'enso'
import produce from 'immer'
import { State } from 'utils/state'

export const useEntity = ({ path, initialValue }) => {
  const state = useContext(State)
  const entity = get(state, path, initialValue)
  const update = useCallback(
    callback =>
      act(
        produce(currentState =>
          set(
            currentState,
            path,
            callback(get(currentState, path, initialValue))
          )
        )
      ),
    [path, initialValue]
  )

  return [entity, update]
}
