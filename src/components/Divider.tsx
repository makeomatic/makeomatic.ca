import * as React from 'react'
import styled from '../styles/styled-components'
import { Container } from './Container'

const StyledContainer = styled(Container)`
  padding: ${(p) => p.theme.dimensions.containerPadding * 2}rem
    ${(p) => p.theme.dimensions.containerPadding}rem;

  h2 {
    letter-spacing: 1.22px;
    max-width: 800px;
  }

  a {
    text-decoration: underline;
    font-weight: 700;
  }

  p {
    font-size: 1.375rem;
    max-width: 800px;
  }

  ${(p) => p.theme.media.md`
    padding: 3rem 1rem;
    
    h2 {
      font-size: 2.25rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  `};
`

interface DividerProps {
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ className, children }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
