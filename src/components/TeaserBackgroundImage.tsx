import * as React from 'react'
import styled from '../styles/styled-components'
import { Align, BackgroundImage } from './BackgroundImage'
import { BackgroundImageLg, BackgroundImageMd } from './ResponsiveBackgroundImage'

const BackgroundImageOnlyMd = styled(BackgroundImageMd)`
  ${(p) => p.theme.media.sm`
    display: none;
  `};
`
export const BackgroundImageOnlySm = styled(BackgroundImage)`
  display: none;

  ${(p) => p.theme.media.sm`
    display: block;
  `};
  ${(p) => p.theme.media.xs`
    display: none;
  `};
`
export const BackgroundImageXs = styled(BackgroundImage)`
  display: none;

  ${(p) => p.theme.media.xs`
    display: block;
  `};
`

interface TeaserBackgroundImageProps {
  imageLg: SharpFixedImage
  imageMd: SharpFixedImage
  imageSm: SharpFixedImage
  imageXs: SharpFixedImage
  alignLg?: Align
  alignMd?: Align
  alignSm?: Align
  alignXs?: Align
  className?: string
}

export const TeaserBackgroundImage: React.FC<TeaserBackgroundImageProps> = ({
  imageLg,
  alignLg,
  imageMd,
  alignMd,
  imageSm,
  alignSm,
  imageXs,
  alignXs,
  className,
}) => (
  <React.Fragment>
    <BackgroundImageLg className={className} image={imageLg} align={alignLg} />
    <BackgroundImageOnlyMd className={className} image={imageMd} align={alignMd} />
    <BackgroundImageOnlySm className={className} image={imageSm} align={alignSm} />
    <BackgroundImageXs className={className} image={imageXs} align={alignXs} />
  </React.Fragment>
)
