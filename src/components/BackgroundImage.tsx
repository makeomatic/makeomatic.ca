import * as React from 'react'
import GatsbyImage from 'gatsby-image'
import styled, { css } from '../styles/styled-components'

function alignImageCss(align?: Align) {
  if (!align) return

  if (align === 'center') {
    return css`
      left: 50%;
      transform: translateX(-50%);
    `
  }

  return css`
    float: right;
  `
}

const BackgroundImageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`

const StyledGatsbyImage = styled(GatsbyImage)<{ align?: Align }>`
  ${p => alignImageCss(p.align)};
`

export type Align = 'center' | 'right'

interface BackgroundImageProps {
  className?: string
  align?: Align
  image: SharpResolutionsImage
}

export const BackgroundImage: React.SFC<BackgroundImageProps> = ({
  image,
  className,
  align,
}) => (
  <BackgroundImageContainer className={className}>
    <StyledGatsbyImage resolutions={image.resolutions} align={align} />
  </BackgroundImageContainer>
)
