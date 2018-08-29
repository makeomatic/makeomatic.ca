import * as React from 'react'

interface IPagePreview {
  entry: {
    getIn(path: string[]): any
  }
  widgetFor(tag: string): React.ReactNode | React.ReactNodeArray
}

export const PagePreview: React.SFC<IPagePreview> = () => <div />
