import { createRouter, InferRouteRef, route } from '@switcher/preact'

export const appRoutes = [
  route('home', '/'),
  route('docs', '/docs'),
  route('FIXME', '/fixme')
]

export const {
  buildHref,
  useRouter,
  RouterContext,
  RouterLink,
  resolveLocation,
  refToLocation
} = createRouter(appRoutes)

// Type to use in prop definitions
export type AppRouteRef = InferRouteRef<typeof appRoutes>
