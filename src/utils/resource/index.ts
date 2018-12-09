import { useEffect, useCallback } from 'react'
import { getJSON } from 'utils/request'
import { useEntity } from 'utils/entity'

export type ResourceUpdater<TContent> = (
  callback: (currentContent: TContent) => TContent
) => void

interface Resource<TContent> {
  initializing: boolean
  loading: boolean
  content?: TContent
  error?: object
}

export interface UseResourceParams<TContent> {
  url: string
  callback: (response: any) => TContent
}

export type UseResourceReturnType<TContent> = [
  TContent,
  Resource<TContent>,
  ResourceUpdater<TContent>
]

export function useResource<TContent>({
  url,
  callback: contentCallback
}: UseResourceParams<TContent>): UseResourceReturnType<TContent> {
  const [resource, update] = useEntity<Resource<TContent>>({
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

  const updateContent: ResourceUpdater<TContent> = useCallback(
    callback =>
      update(({ content, ...currentResource }) => ({
        ...currentResource,
        content: callback(content)
      })),
    []
  )

  return [resource.content, resource, updateContent]
}
