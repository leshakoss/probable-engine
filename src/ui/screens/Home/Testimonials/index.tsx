import React from 'react'
import HomeBlock, {
  HomeBlockAction,
  HomeBlockLink
} from 'ui/components/HomeBlock'

import {
  List,
  Item,
  Quote,
  QuoteTriangle,
  QuoteTriangleInner,
  Avatar,
  AvatarImage,
  Name,
  Text
} from './style.css'

const testimonials = [
  {
    name: 'jrop',
    url: 'https://github.com/jrop',
    avatar: 'https://github.com/jrop.png',
    text: `
      date-fns is the modular path to date/time manipulation. Where I
      work, it helped us get our bundle sizes down, especially because
      we are able to include only the functionality we need.
    `
  },

  {
    name: 'Nicholas Kircher',
    url: 'https://github.com/MiracleBlue',
    avatar: 'https://github.com/MiracleBlue.png',
    text: `
      date-fns gave us the power to work directly with date objects,
      without worrying about conversion or mutations. It's a real game
      changer for dates.
    `
  },

  {
    name: 'Miljan Aleksic',
    title: (
      <>
        , author of{' '}
        <HomeBlockLink to="https://vuikit.js.org/">Vuikit</HomeBlockLink>
      </>
    ),
    url: 'https://github.com/miljan-aleksic',
    avatar: 'https://github.com/miljan-aleksic.png',
    text: `
      Sasha and Lesha Koss made what anyone dealing with dates in JS
      ever wanted, but didn’t got the time, the knowledge or the
      courage! Because of stars like date-fns the dev community is
      becoming an amazing universe. Thank you!
    `
  }
]

export default function Testimonials() {
  return (
    <HomeBlock
      header="Testimonials"
      action={
        <HomeBlockAction to="https://github.com/date-fns/date-fns/issues/new?labels[]=Feedback">
          Leave Your Feedback
        </HomeBlockAction>
      }
    >
      <List>
        {testimonials.map((testimonial, index) => (
          <Item key={index}>
            <Avatar>
              <AvatarImage tag="img" src={testimonial.avatar} />
            </Avatar>

            <Quote>
              <QuoteTriangle>
                <QuoteTriangleInner />
              </QuoteTriangle>

              <Name>
                <HomeBlockLink to={testimonial.url}>
                  {testimonial.name}
                </HomeBlockLink>
                {testimonial.title}
              </Name>

              <Text>{testimonial.text}</Text>
            </Quote>
          </Item>
        ))}
      </List>
    </HomeBlock>
  )
}