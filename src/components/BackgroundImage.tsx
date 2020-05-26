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
    float: ${align};
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
  ${(p) => alignImageCss(p.align)};
`

export type Align = 'center' | 'right' | 'left'

interface BackgroundImageProps {
  className?: string
  align?: Align
  image: SharpFixedImage
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ image, className, align }) => (
  <BackgroundImageContainer className={className}>
    <StyledGatsbyImage resolutions={image.childImageSharp.fixed} align={align} />
  </BackgroundImageContainer>
)
