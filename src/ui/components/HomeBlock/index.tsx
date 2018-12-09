import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Block,
  InnerContainer,
  Header,
  SubHeader,
  Content,
  Action,
  Link,
  Text
} from './style.css'

interface HomeBlockProps {
  header?: React.ReactNode
  subHeader?: React.ReactNode
  action?: React.ReactNode
}
const HomeBlock: React.FunctionComponent<HomeBlockProps> = ({
  header,
  subHeader,
  action,
  children
}) => (
  <Block>
    <InnerContainer>
      {header && <Header>{header}</Header>}

      {subHeader && <SubHeader>{subHeader}</SubHeader>}

      <Content>{children}</Content>

      {action}
    </InnerContainer>
  </Block>
)
export default HomeBlock

interface HomeBlockActionProps {
  to: string
  title?: string
}
export const HomeBlockAction: React.FunctionComponent<HomeBlockActionProps> = ({
  to,
  title,
  children
}) => (
  <Action tag={RouterLink} to={to} title={title}>
    {children}
  </Action>
)

interface HomeBlockLinkProps {
  to: string
  title?: string
}
export const HomeBlockLink: React.FunctionComponent<HomeBlockLinkProps> = ({
  to,
  title,
  children
}) => (
  <Link tag={RouterLink} to={to} title={title}>
    {children}
  </Link>
)

export const HomeBlockText: React.FunctionComponent = ({ children }) => (
  <Text>{children}</Text>
)
