'use strict'

module.exports = {
  siteMetadata: {
    title: 'Makeomatic',
    description: 'Makeomatic is your cutting-edge web development and design partner specializing in creating high-load interactive applications.',
    siteUrl: 'https://makeomatic.ca',
    author: {
      name: 'Alexey Khoroshev',
      url: 'https://github.com/aleksxor',
      email: 'aleksxor@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://makeomatic.ca/'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140718608-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        icon: false,
        svgo: false,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: `${__dirname}/src/assets/img/favicon.png`,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
}
