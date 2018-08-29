import * as React from 'react'
import styled from '../styles/styled-components'

const StyledContainer = styled.div<{ invert?: boolean }>`
  position: relative;
  overflow: hidden;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${p => (p.invert ? p.theme.colors.black : p.theme.colors.white)};

  p {
    margin-top: 0.75rem;
    font-size: 1.375rem;
  }
`

export interface CardContentsProps {
  className?: string
  invert?: boolean
}

export const CardContents: React.SFC<CardContentsProps> = ({ className, invert, children }) => (
  <StyledContainer className={className} invert={invert}>
    {children}
  </StyledContainer>
)
