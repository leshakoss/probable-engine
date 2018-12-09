import React from 'react'
import HomeBlock, { HomeBlockText } from 'ui/components/HomeBlock'
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

    <HomeBlockText>
      Want to become a project sponsor, add your (company) name to the hall of
      fame and support the developers?
    </HomeBlockText>

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
