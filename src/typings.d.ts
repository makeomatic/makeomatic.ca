// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void

interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.svg' {
  const content: string
  export const ReactComponent: React.SVGFactory
  export default content
}

interface NetlifyCMSModule {
  registerPreviewStyle(filename: string): void
  registerPreviewTemplate(name: string, component: React.ComponentType<any>): void
}

declare module 'netlify-cms' {
  const netlifyCms: NetlifyCMSModule
  export default netlifyCms
}

interface SharpSizesImage {
  sizes: {
    aspectRatio: number
  }
}
interface SharpResolutionsImage {
  resolutions: {
    base64: string
    src: string
    srcSet: string
    height: number
    width: number
  }
}
type SharpImage = SharpSizesImage | SharpResolutionsImage
