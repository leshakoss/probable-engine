import { h } from 'preact'
import { HomeBlock, HomeText } from 'ui/components/Home'
import { CTA, List, Item } from './style.css'
import codePilotLogo from './img/codepilot.svg'

const sponsors = [
  {
    name: 'CodePilot.ai',
    url: 'https://codepilot.ai/?ref=date-fns',
    logo: codePilotLogo
  }
]

const Sponsorship = () => (
  <HomeBlock header="Sponsors">
    <List>
      {sponsors.map(sponsor => (
        <Item
          key={sponsor.name}
          tag="a"
          href="https://codepilot.ai/?ref=date-fns"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sponsor.logo} alt={sponsor.name} />
        </Item>
      ))}
    </List>

    <HomeText>
      Want to become a project sponsor, add your (company) name to the hall of
      fame and support the developers?
    </HomeText>

    <CTA
      tag="a"
      href="https://opencollective.com/date-fns"
      className="sponsorship-cta"
      target="_blank"
      rel="noopener noreferrer"
    >
      Sponsor date-fns
    </CTA>
  </HomeBlock>
)
export default Sponsorship
