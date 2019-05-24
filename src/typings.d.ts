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

interface SharpFluidImage {
  childImageSharp: {
    fluid: {
      aspectRatio: number
    }
  }
}
interface SharpFixedImage {
  childImageSharp: {
    fixed: {
      base64: string
      src: string
      srcSet: string
      height: number
      width: number
    }
  }
}
type SharpImage = SharpFluidImage | SharpFixedImage
