import * as React from 'react'
import styled from '../styles/styled-components'
import { ReactComponent as LogoIcon } from '../assets/svg/logo.svg'
import { ReactComponent as LogoIconMd } from '../assets/svg/logo_md.svg'
import { Link } from 'gatsby'

import { onEvent } from '../styles/mixins'
import { Container } from './Container'

const HeaderLink = styled(Link)`
  ${onEvent`
    text-decoration: none;
  `};
`

const NavAnchor = styled.a`
  text-transform: uppercase;

  ${onEvent`
    text-decoration: none;
  `};
`

const StyledHeader = styled.header<{ invert?: boolean }>`
  height: 136px;
  background-color: ${(p) => (p.invert ? p.theme.colors.white : 'inherit')};
  color: ${(p) => (p.invert ? p.theme.colors.black : p.theme.colors.white)};

  & ${HeaderLink}, & ${NavAnchor} {
    color: ${(p) => (p.invert ? p.theme.colors.black : p.theme.colors.white)};
  }

  ${(p) => p.theme.media.md`
    height: auto;
  `};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: ${(p) => p.theme.dimensions.containerPadding}rem;

  ${(p) => p.theme.media.md`
    display: block;
    padding: 2rem 1rem 1rem;
  `};
`

const LogoContainer = styled.div`
  flex-grow: 1;
  font-size: 0;
`

const StyledLogoIcon = styled(LogoIcon)`
  ${(p) => p.theme.media.md`
    display: none;
  `};
`
const StyledLogoIconMd = styled(LogoIconMd)`
  display: none;

  ${(p) => p.theme.media.md`
    display: block;
  `};
`

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.125rem;

  ${(p) => p.theme.media.md`
    width: 100%;
    overflow-x: auto;
    display: block;
    white-space: nowrap;
    margin-top: 1.25rem;
  `};
`

const NavLink = styled(HeaderLink).attrs({
  activeClassName: 'active',
})`
  margin-right: 2rem;
  text-transform: uppercase;

  &.active {
    font-weight: 700;
  }
`

interface HeaderProps {
  title: string
  invert?: boolean
}

export const Header: React.FC<HeaderProps> = ({ invert }) => (
  <StyledHeader invert={invert}>
    <HeaderInner>
      <LogoContainer>
        <HeaderLink to="/">
          <StyledLogoIcon />
          <StyledLogoIconMd />
        </HeaderLink>
      </LogoContainer>
      <Nav>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/team">About</NavLink>
        <NavLink to="/process">Our process</NavLink>
        <NavAnchor href="#contacts">Get in touch</NavAnchor>
      </Nav>
    </HeaderInner>
  </StyledHeader>
)
