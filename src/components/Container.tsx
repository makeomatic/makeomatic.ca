import * as React from 'react'
import styled from 'styled-components'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${(p) => getEmSize(p.theme.breakpoints.xl)}rem;
`

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
