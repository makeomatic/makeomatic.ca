import { colors, dimensions, fonts, heights, breakpoints } from './variables'
import { media } from './mixins'

export const theme = { breakpoints, colors, media, dimensions, fonts, heights }

export interface ThemeInterface extends Readonly<typeof theme> {}
