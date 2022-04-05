import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Menu } from './components/Menu'
import { Table } from './components/Table'
import clubSymbol from './imgs/symbol.svg'

const tableData = [
  {
    club: 'Manchester United',
    results: ['l', 'w', 'w', 'w', 'd'],
    position: 1,
    points: 50,
    played: 29,
    won: 14,
    drawn: 8,
    lost: 7,
    goalsFor: 48,
    goalsAgainst: 40,
    goalsDifference: 8,
    clubSymbol: clubSymbol
  }
]

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Menu /> */}
      <Table data={tableData} />
    </ThemeProvider>
  )
}
