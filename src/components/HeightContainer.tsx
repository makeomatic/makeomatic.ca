import * as React from 'react'
import styled from '../styles/styled-components'
import { getEmSize } from '../styles/mixins'
import { Container } from './Container'

const Contents = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: ${getEmSize(700)}em;

  ${(p) => p.theme.media.md`
    height: ${getEmSize(520)}em;
  `};
`

interface CardContainerProps {
  className?: string
}

export const HeightContainer: React.FC<CardContainerProps> = ({ className, children }) => (
  <Container>
    <Contents className={className}>{children}</Contents>
  </Container>
)
