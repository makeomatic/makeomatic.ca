import { breakpoints, colors, dimensions, fonts, heights, widths } from './variables'
import { media } from './mixins'

export const theme = { breakpoints, colors, media, dimensions, fonts, heights, widths }

export interface ThemeInterface extends Readonly<typeof theme> {}
