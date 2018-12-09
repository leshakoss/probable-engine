import { useContext, useCallback } from 'react'
import { get, set, PropertyPath } from 'lodash'
import { act } from 'enso'
import produce from 'immer'
import { State } from 'utils/state'

export type EntityUpdater<TEntity> = (
  callback: (currentEntity: TEntity) => TEntity
) => void

export interface UseEntityParams<TEntity> {
  path: PropertyPath
  initialValue: TEntity
}

export type UseEntityReturnType<TEntity> = [TEntity, EntityUpdater<TEntity>]

export function useEntity<TEntity>({
  path,
  initialValue
}: UseEntityParams<TEntity>): UseEntityReturnType<TEntity> {
  const state = useContext(State)
  const entity: TEntity = get(state, path, initialValue)
  const update: EntityUpdater<TEntity> = useCallback(
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
