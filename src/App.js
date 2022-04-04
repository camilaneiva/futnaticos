import { ThemeProvider } from 'styled-components'
import { MatchCard } from './components/MatchCard'
import { Menu } from './components/Menu'
import { theme } from './design-system/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Menu /> */}
      <MatchCard />
    </ThemeProvider>
  )
}
