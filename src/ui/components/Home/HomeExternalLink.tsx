import { h, FunctionComponent } from 'preact'
import { Link } from './style.css'

interface Props {
  href: string
  title?: string
}

export const HomeExternalLink: FunctionComponent<Props> = ({
  href,
  title,
  children
}) => (
  <Link tag="a" href={href} title={title}>
    {children}
  </Link>
)
