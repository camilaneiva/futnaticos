import { ThemeProvider } from 'styled-components'
import { theme } from './design-system/theme'
import { Menu } from './components/Menu'
import { Table } from './components/Table'
import clubSymbol from './imgs/symbol.svg'
import clubSymbol2 from './imgs/totte.png'
import { Layout } from './components/Layout'
import { NextMatch } from './components/NextMatch'
import { LastMatches } from './components/LastMatches'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTable } from './requests/getTable'
import { Oval } from 'react-loader-spinner'
import './App.css'
import { getNextMatch } from './requests/getNextMatch'

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
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem('table')) ?? null
  )
  const [nextMatch, setNextMatch] = useState(
    JSON.parse(localStorage.getItem('nextMatch')) ?? null
  )

  useEffect(() => {
    if (!tableData) {
      getTable(setTableData)
    }
  }, [])

  useEffect(() => {
    if (tableData) {
      localStorage.setItem('table', JSON.stringify(tableData))
    }
  }, [tableData])

  useEffect(() => {
    getNextMatch(setNextMatch)
  }, [])

  useEffect(() => {
    if (nextMatch) {
      localStorage.setItem('nextMatch', JSON.stringify(nextMatch))
    }
  }, [nextMatch])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Menu card={cardInfo} />
        <div className={'container'}>
          {tableData ? (
            <Table data={tableData} />
          ) : (
            <Oval height={50} color="#a5a5a5" secondaryColor="#c5c5c5" />
          )}
        </div>
        <div>
          {nextMatch && <NextMatch match={nextMatch} />}
          <LastMatches lastMatches={lastMatches} />
        </div>
      </Layout>
    </ThemeProvider>
  )
}
