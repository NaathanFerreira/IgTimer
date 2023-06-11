// .d.ts significa que nessa arquivo só terá código totalmente de typescript (só possui tipagens)

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
