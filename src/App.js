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
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem('tabela')) ?? null
  )

  useEffect(() => {
    if (!tableData) {
      getTable(setTableData)
    }
  }, [])

  useEffect(() => {
    if (tableData) {
      localStorage.setItem('tabela', JSON.stringify(tableData))
    }
  }, [tableData])

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
          <NextMatch match={nextMatch} />
          <LastMatches lastMatches={lastMatches} />
        </div>
      </Layout>
    </ThemeProvider>
  )
}
