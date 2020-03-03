import * as React from 'react'
import styled from '../styles/styled-components'
import { Align, BackgroundImage } from './BackgroundImage'

export const BackgroundImageLg = styled(BackgroundImage)`
  display: block;

  ${p => p.theme.media.md`
    display: none;
  `};
`
export const BackgroundImageMd = styled(BackgroundImage)`
  display: none;

  ${p => p.theme.media.md`
    display: block;
  `};
`

interface ResponsiveBackgroundImageProps {
  imageLg: SharpFixedImage
  imageMd: SharpFixedImage
  alignLg?: Align
  alignMd?: Align
  className?: string
}

export const ResponsiveBackgroundImage: React.FC<ResponsiveBackgroundImageProps> = ({
  imageLg,
  alignLg,
  imageMd,
  alignMd,
  className,
}) => (
  <React.Fragment>
    <BackgroundImageLg className={className} image={imageLg} align={alignLg} />
    <BackgroundImageMd className={className} image={imageMd} align={alignMd} />
  </React.Fragment>
)
