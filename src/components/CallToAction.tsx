import styled from '../styles/styled-components'
import { Divider } from './Divider'

export const CallToAction = styled(Divider)`
  h2 {
    font-size: 2.125rem;
  }

  strong {
    color: ${(p) => p.theme.colors.white};
    // text-decoration: underline;
  }
`
