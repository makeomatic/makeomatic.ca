import * as React from 'react'
import { Link } from 'gatsby'
import styled from '../styles/styled-components'
import { ReactComponent as MoreIcon } from '../assets/svg/more.svg'

const ReadMore: React.FC<{ className?: string; to: string }> = ({ className, to }) => (
  <div>
    <Link className={className} to={to}>
      Read more <MoreIcon />
    </Link>
  </div>
)

const StyledReadMore = styled(ReadMore)`
  font-size: 1.375rem;
  // display: inline-block;
  display: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`

const Spacer = styled.div`
  flex-grow: 1;
`

const SideBlock: React.FC<{ className?: string; more?: string }> = ({
  className,
  children,
  more,
}) => (
  <aside className={className}>
    {children}
    <Spacer />
    {more && <StyledReadMore to={more} />}
  </aside>
)

export const StyledSideBlock = styled(SideBlock)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: #000;
  padding: ${p => p.theme.dimensions.containerPadding}rem;
  width: 20rem;
  height: 100%;
  margin: 0 auto 0 0;

  ${p => p.theme.media.lg`
    width: 26rem;
  `};

  ${p => p.theme.media.md`
    width: auto;
    padding: 1rem;
    background-color: transparent;
  `};
`
