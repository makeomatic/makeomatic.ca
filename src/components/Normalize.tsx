import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from '../styles/styled-components'
import { dimensions, fonts, colors } from '../styles/variables'
import { onEvent } from '../styles/mixins'

export const Normalize = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }
  html, body {
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: ${fonts.sansSerif};
    color: ${colors.white};
    font-weight: 400;
    background-color: ${colors.black};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    color: ${colors.white};
    text-decoration: none;

    ${onEvent`
      text-decoration: underline;
    `}
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    font-family: ${fonts.header};
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
    line-height: 1;
    letter-spacing: 1px;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
