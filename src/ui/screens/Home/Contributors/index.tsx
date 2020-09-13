import { h } from 'preact'
import { HomeBlock, HomeAction, HomeExternalLink } from 'ui/components/Home'
import { List, Item, LinkContent, Avatar, Name } from './style.css'

const Contributors = () => {
  return <div>'FIXME'</div>
  // const [contributors = []] = useContributors()
  //
  // return (
  //   <HomeBlock
  //     header="Contributors"
  //     action={
  //       <HomeAction to={{ name: 'FIXME' }}>Contribute to date-fns</HomeAction>
  //     }
  //   >
  //     <List tag="ol">
  //       {contributors.map(contributor => (
  //         <Item tag="li" key={contributor.name}>
  //           <HomeExternalLink href={contributor.url}>
  //             <LinkContent tag="span">
  //               <Avatar
  //                 tag="img"
  //                 src={contributor.avatarUrl}
  //                 alt={`@${contributor.name}'s avatar`}
  //               />
  //               <Name tag="span">@{contributor.name}</Name>
  //             </LinkContent>
  //           </HomeExternalLink>
  //         </Item>
  //       ))}
  //     </List>
  //   </HomeBlock>
  // )
}
export default Contributors
