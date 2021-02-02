import * as React from 'react'
import styled from '../styles/styled-components'
import { Link } from 'gatsby'
import { Container } from './Container'
import { ReactComponent as LogoIcon } from '../assets/svg/logo.svg'
import { ReactComponent as GithubIcon } from '../assets/svg/icon_github.svg'
import { ReactComponent as BehanceIcon } from '../assets/svg/icon_behance.svg'
import { getEmSize } from '../styles/mixins'

const StyledContactsContainer = styled.section`
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
`

const StyledContacts = styled(Container)`
  padding: ${(p) => p.theme.dimensions.containerPadding * 1.5}rem
    ${(p) => p.theme.dimensions.containerPadding}rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;

  a {
    color: ${(p) => p.theme.colors.black};
  }

  ${(p) => p.theme.media.md`
    padding: ${(t) => t.theme.dimensions.containerPadding}rem 1rem;
    flex-direction: column;
    font-size: 1.375rem;
    max-width: ${getEmSize(400)}rem;
  `};
`

const StyledLogoIcon = styled(LogoIcon)`
  color: ${(p) => p.theme.colors.black};

  ${(p) => p.theme.media.md`
    display: none;
  `};
`

const Address = styled.address`
  font-style: normal;

  p:last-child {
    margin-bottom: 0;
  }

  ${(p) => p.theme.media.md`
    order: 1;
    margin: 2rem auto;
    text-align: center;
  `};
`

const Links = styled.div`
  font-weight: 600;
  text-transform: uppercase;

  ${(p) => p.theme.media.md`
    order: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    white-space: nowrap;
    justify-content: space-between;
  `};
`

const StyledLink = styled(Link)`
  display: block;
`

const Social = styled.div`
  display: flex;
  order: 2;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;

  ${(p) => p.theme.media.md`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `};

  svg {
    width: 1.2em;
    height: 1.2em;

    ${(p) => p.theme.media.md`
      width: 2.375rem;
      height: 2.375rem;
    `};

    &:last-child {
      margin-top: 1.5rem;

      ${(p) => p.theme.media.md`
        margin-top: 0;
      `};
    }
  }
`

export const Contacts: React.FC<{}> = () => (
  <StyledContactsContainer id="contacts">
    <StyledContacts>
      <StyledLogoIcon />
      <Address>
        <p>
          +1 (236) 777 41 46
          <br />
          <a href="mailto:info@makeomatic.ca" target="_blank" rel="noopener noreferrer">
            info@makeomatic.ca
          </a>
        </p>
        <p>
          602 Citadel Parade,
          <br />
          Vancouver, BC Canada
        </p>
      </Address>
      <Links>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/team">About</StyledLink>
        <StyledLink to="/process">Process</StyledLink>
      </Links>
      <Social>
        <a href="https://github.com/makeomatic" rel="noopener noreferrer" target="github">
          <GithubIcon />
        </a>
        <a href="https://www.behance.net/amineva_design" rel="noopener noreferrer" target="behance">
          <BehanceIcon />
        </a>
      </Social>
    </StyledContacts>
  </StyledContactsContainer>
)
