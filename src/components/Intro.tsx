import * as React from 'react'
import styled from '../styles/styled-components'
import { HeightContainer } from './HeightContainer'

const IntroContainer = styled(HeightContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(p) => p.theme.dimensions.containerPadding}rem;

  ${(p) => p.theme.media.md`
    justify-content: top;
    flex-direction: row;
    padding: 1rem;
  `};
`

const ChildContents = styled.div`
  ${(p) => p.theme.media.md`
    padding-top: 10rem;
  `}
`

const Contents = styled.div`
  max-width: 786px;

  h1 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
  }

  p {
    font-size: 1.75rem;
    line-height: 1.1786;
    letter-spacing: 0.38px;
    max-width: 36rem;
  }

  ${(p) => p.theme.media.md`
    h1 {
      font-size: 2.75rem;
    }
  
    p {
      font-size: 1.375rem;
    }
  `};
`

interface IntroProps {
  className?: string
  header?: React.ReactNode
  text?: React.ReactNode
}

export const Intro: React.FC<IntroProps> = ({ className, children, header, text }) => (
  <IntroContainer>
    {children}
    <Contents className={className}>
      <h1>{header}</h1>
      <p>{text}</p>
    </Contents>
  </IntroContainer>
)
