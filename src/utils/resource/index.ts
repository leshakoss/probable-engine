import { useEffect, useCallback } from 'react'
import { getJSON } from 'utils/request'
import { useEntity } from 'utils/entity'

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
