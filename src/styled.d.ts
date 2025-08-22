import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string
      surface: string
      text: string
      subtext: string
      primary: string
      accent: string
      border: string
    }
  }
}


