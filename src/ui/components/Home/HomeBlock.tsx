import { h, ComponentChild, FunctionComponent } from 'preact'
import { Block, InnerContainer, Header, SubHeader, Content } from './style.css'

interface Props {
  header?: ComponentChild
  subHeader?: ComponentChild
  action?: ComponentChild
}

export const HomeBlock: FunctionComponent<Props> = ({
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
