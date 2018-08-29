import * as React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from '../styles/styled-components'

import '../styles/normalize'

import { Header } from '../components/Header'
import { LayoutRoot } from '../components/LayoutRoot'
import { LayoutMain } from '../components/LayoutMain'
import { theme } from '../styles/theme'
import { Footer } from '../components/Footer'
import { Contacts } from '../components/Contacts'

if (typeof window !== 'undefined') {
  require('webfontloader').load({
    google: {
      families: ['Rozha One:400:latin', 'Assistant:400,600,700:latin'],
    },
  })
}

interface WrapperProps {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const IndexLayout: React.SFC<WrapperProps> = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <LayoutRoot>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'makeomatic, landing' },
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <LayoutMain>{children()}</LayoutMain>
      <Contacts />
      <Footer />
    </LayoutRoot>
  </ThemeProvider>
)

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
