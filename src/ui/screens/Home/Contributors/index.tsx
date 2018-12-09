import React from 'react'
import HomeBlock, {
  HomeBlockAction,
  HomeBlockLink
} from 'ui/components/HomeBlock'
import { List, Item, LinkContent, Avatar, Name } from './style.css'

import useContributors from 'ui/resources/useContributors'

const Contributors = () => {
  const [contributors = []] = useContributors()

  return (
    <HomeBlock
      header="Contributors"
      action={
        <HomeBlockAction to="/TODO">Contribute to date-fns</HomeBlockAction>
      }
    >
      <List tag="ol">
        {contributors.map(contributor => (
          <Item tag="li" key={contributor.name}>
            <HomeBlockLink to={contributor.url}>
              <LinkContent tag="span">
                <Avatar
                  tag="img"
                  src={contributor.avatarUrl}
                  alt={`@${contributor.name}'s avatar`}
                />
                <Name tag="span">@{contributor.name}</Name>
              </LinkContent>
            </HomeBlockLink>
          </Item>
        ))}
      </List>
    </HomeBlock>
  )
}
export default Contributors
