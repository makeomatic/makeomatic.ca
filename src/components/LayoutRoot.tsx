import * as React from 'react'
import styled from 'styled-components'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
)
