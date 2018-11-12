declare module '*.ejs' {
  export default function template(params: { [name: string]: any }): string
}
