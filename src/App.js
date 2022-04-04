import { ThemeProvider } from 'styled-components'
import { Menu } from './components/Menu'
import { theme } from './design-system/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  )
}
