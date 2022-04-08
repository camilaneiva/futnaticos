import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Menu } from './components/Menu'
import { Table } from './components/Table'
import clubSymbol from './imgs/symbol.svg'
import clubSymbol2 from './imgs/totte.png'
import { Layout } from './components/Layout'
import { NextMatch } from './components/NextMatch'
import { LastMatches } from './components/LastMatches'

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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

const nextMatch = {
  date: '02/04',
  place: 'Goodison Park',
  time: '13:30',
  homeClub: 'MUN',
  awayClub: 'TOT',
  homeSymbol: clubSymbol,
  awaySymbol: clubSymbol2
}

const lastMatches = [
  {
    date: '02/04',
    place: 'Goodison Park',
    homeClub: 'MUN',
    awayClub: 'TOT',
    homeSymbol: clubSymbol,
    awaySymbol: clubSymbol2,
    score: '2x1'
  },
  {
    date: '02/04',
    place: 'Goodison Park',
    homeClub: 'MUN',
    awayClub: 'TOT',
    homeSymbol: clubSymbol,
    awaySymbol: clubSymbol2,
    score: '2x1'
  },
  {
    date: '02/04',
    place: 'Goodison Park',
    homeClub: 'MUN',
    awayClub: 'TOT',
    homeSymbol: clubSymbol,
    awaySymbol: clubSymbol2,
    score: '2x1'
  }
]

const cardInfo = {
  club: 'Manchester United',
  championship: 'Premier League',
  position: 6,
  points: 50,
  clubSymbol: clubSymbol
}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Menu card={cardInfo} />
        <Table data={tableData} />
        <div>
          <NextMatch match={nextMatch} />
          <LastMatches lastMatches={lastMatches} />
        </div>
      </Layout>
    </ThemeProvider>
  )
}
