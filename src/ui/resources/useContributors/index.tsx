import { useResource } from 'utils/resource'

const url =
  'https://api.github.com/repos/date-fns/date-fns/contributors?per_page=999'

type ContributorsResourceContent = {
  id: string
  url: string
  avatarUrl: string
  name: string
}[]

const useContributors = () =>
  useResource<ContributorsResourceContent>({
    url,
    callback: content =>
      content.map((user: any) => ({
        id: user.id,
        url: user.html_url,
        avatarUrl: user.avatar_url,
        name: user.login
      }))
  })

export default useContributors
