import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '../styles/styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './Header'
import { LayoutRoot } from './LayoutRoot'
import { LayoutMain } from './LayoutMain'
import { theme } from '../styles/theme'
import { Footer } from './Footer'
import { Contacts } from './Contacts'
import { Normalize } from './Normalize'

if (typeof window !== 'undefined') {
  require('webfontloader').load({
    google: {
      families: [
        'Rozha One:400:latin',
        'Assistant:400,600,700:latin',
        'Nunito Sans:400,700,800:latin',
        'Merriweather:400:latin',
      ],
    },
  })
}

interface SiteData {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface WrapperProps {
  children: React.ReactElement
  invert?: boolean
}

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export const Layout: React.FC<WrapperProps> = ({ children, invert }) => (
  <ThemeProvider theme={theme}>
    <LayoutRoot>
      <StaticQuery
        query={query}
        render={(data: SiteData) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: 'makeomatic, landing' },
              ]}
            />
            <Header title={data.site.siteMetadata.title} invert={invert} />
          </>
        )}
      />
      <LayoutMain>{children}</LayoutMain>
      <Contacts />
      <Footer />
      <Normalize />
    </LayoutRoot>
  </ThemeProvider>
)
