import { css, Interpolation, SimpleInterpolation, ThemedStyledProps } from 'styled-components'
import { dimensions, breakpoints } from './variables'
import { ThemeInterface } from './theme'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  xs: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: 0) and (max-width: ${getEmSize(breakpoints.sm - 1)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  sm: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: 0) and (max-width: ${getEmSize(breakpoints.md - 1)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  md: <P extends object>(
    styles: TemplateStringsArray,
    ...interpolations: (SimpleInterpolation | Interpolation<ThemedStyledProps<P, ThemeInterface>>)[]
  ) => css`
    @media (max-width: ${getEmSize(breakpoints.lg - 1)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  lg: <P extends object>(
    styles: TemplateStringsArray,
    ...interpolations: (SimpleInterpolation | Interpolation<ThemedStyledProps<P, ThemeInterface>>)[]
  ) => css`
    @media (max-width: ${getEmSize(breakpoints.xl - 1)}em) {
      ${css(styles, ...interpolations)};
    }
  `,
  xl: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(breakpoints.xl)}em) {
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
