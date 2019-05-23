import * as styledComponents from 'styled-components'
import { ThemeInterface } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, withTheme, ThemeProvider }
export default styled
