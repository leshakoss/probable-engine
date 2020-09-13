import { ComponentType, JSX } from 'preact'

type CSSComponentProps<TAdditionalProps = {}> = {
  tag?: keyof JSX.IntrinsicElements
} & JSX.HTMLAttributes<any> &
  TAdditionalProps

type CSSPreactComponentProps<
  TPreactComponent extends ComponentType<any>,
  TAdditionalProps = {}
> = { tag: TPreactComponent } & (TPreactComponent extends ComponentType<
  infer Props
>
  ? Omit<Props, 'tag'>
  : {}) &
  TAdditionalProps

export type CSSComponent<TAdditionalProps = {}> = ComponentType<
  CSSComponentProps<TAdditionalProps>
>

export type CSSPreactComponent<
  TPreactComponent extends ComponentType<any>,
  TAdditionalProps = {}
> = ComponentType<
  | CSSComponentProps<TAdditionalProps>
  | CSSPreactComponentProps<TPreactComponent, TAdditionalProps>
>
