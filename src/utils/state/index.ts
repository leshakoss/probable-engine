import React, { useContext, useEffect, useCallback } from 'react'
import { get, set } from 'lodash'
import { act } from 'enso'
import produce from 'immer'
import { getJSON } from 'utils/request'

const State = React.createContext({})
export { State }

export const useState = () => {
  return [useContext(State), act]
}

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

export const useResource = ({ url, callback: contentCallback }) => {
  const [resource, update] = useEntity({
    path: ['resource', url],
    initialValue: { initializing: true, loading: true, content: undefined }
  })

  useEffect(
    () => {
      if (resource.initializing) {
        update(currentResource => {
          currentResource.initializing = false
          return currentResource
        })

        getJSON(url)
          .then(response =>
            update(currentResource => {
              currentResource.loading = false
              currentResource.content = contentCallback
                ? contentCallback(response)
                : response
              return currentResource
            })
          )
          .catch(error =>
            update(currentResource => {
              currentResource.loading = false
              currentResource.error = error
              return currentResource
            })
          )
      }
    },
    [url]
  )

  const updateContent = useCallback(
    callback =>
      update(({ content, ...currentResource }) => ({
        ...currentResource,
        content: callback(content)
      })),
    []
  )

  return [resource.content, resource, updateContent]
}
