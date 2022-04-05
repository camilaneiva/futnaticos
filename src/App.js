import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Menu } from './components/Menu'
import { Table } from './components/Table'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Menu /> */}
      <Table />
    </ThemeProvider>
  )
}
