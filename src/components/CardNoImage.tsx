import * as React from 'react'
import styled from '../styles/styled-components'

const StyledContainer = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
`

const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${p => p.theme.dimensions.containerPadding * 2.5}rem;

  ${p => p.theme.media.lg`
    padding: 0 ${t => t.theme.dimensions.containerPadding}rem;
  `};

  ${p => p.theme.media.md`
    padding: 0 1rem;
  `};

  p {
    font-size: 1.25rem;
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

interface CardNoImageProps {
  className?: string
  header: React.ReactNode
  text: React.ReactNode
}

export const CardNoImage: React.FC<CardNoImageProps> = ({ className, header, text }) => (
  <StyledContainer className={className}>
    <Contents>
      <h2>{header}</h2>
      <p>{text}</p>
    </Contents>
  </StyledContainer>
)
