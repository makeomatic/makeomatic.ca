import * as React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
`

interface PageProps {
  className?: string
}

export const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
)
