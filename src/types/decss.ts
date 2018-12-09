import { FunctionComponent, ReactType, Ref, AllHTMLAttributes } from 'react'

export interface CSSProps {
  tag?: ReactType
  innerRef?: (ref: Ref<any>) => void
}

export type CSSComponent<AdditionalProps = {}> = FunctionComponent<
  AllHTMLAttributes<any> & CSSProps & AdditionalProps
>
