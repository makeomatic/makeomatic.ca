import * as React from 'react'
import styled from '../styles/styled-components'
import { Container } from './Container'

const InnerFooter = styled(Container)`
  padding: ${(p) => p.theme.dimensions.footerPadding}rem
    ${(p) => p.theme.dimensions.containerPadding}rem;
  font-size: 1.125rem;

  ${(p) => p.theme.media.md`
    text-align: center;
  `};
`

export const Footer: React.FC = () => (
  <footer>
    <InnerFooter>{'© 2012–2019, Makeomatic'}</InnerFooter>
  </footer>
)
