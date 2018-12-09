declare module '*.ejs' {
  export default function template(params: { [name: string]: any }): string
}

declare module '*.svg' {
  const url: string
  export default url
}

declare module '*.css?raw' {

}
