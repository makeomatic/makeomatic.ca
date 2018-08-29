import { css, Interpolation, SimpleInterpolation, ThemedStyledProps } from 'styled-components'
import { dimensions } from './variables'
import { ThemeInterface } from './theme'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  sm: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: 0) and (max-width: ${getEmSize(576)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  md: <P = {}>(
    styles: TemplateStringsArray,
    ...interpolations: (SimpleInterpolation | Interpolation<ThemedStyledProps<P, ThemeInterface>>)[]
  ) => css`
    @media (max-width: ${getEmSize(959)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  lg: <P = {}>(
    styles: TemplateStringsArray,
    ...interpolations: (SimpleInterpolation | Interpolation<ThemedStyledProps<P, ThemeInterface>>)[]
  ) => css`
    @media (max-width: ${getEmSize(1279)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  xl: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(1280)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
}

// event wrapper
export const onEvent = (
  styles: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  &:hover,
  &:focus {
    ${css(styles, ...interpolations)};
  }
`
