import axios from 'axios'

export const getTable = async (setTableData) => {
  const response = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/standings',
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      },
      params: {
        season: '2021',
        league: '39'
      }
    }
  )
  const data = response.data //axios
  const tableDTO = data.response[0].league.standings[0] // Array(20)[{a: asdfasdf, b: asdfasdfdasf, c:asdfadsf}]

  const table = tableDTO.map((teamInfo) => {
    return {
      club: teamInfo.team.name,
      results: getResultsFromString(teamInfo.form),
      position: teamInfo.rank,
      points: teamInfo.points,
      played: teamInfo.all.played,
      won: teamInfo.all.win,
      drawn: teamInfo.all.draw,
      lost: teamInfo.all.lose,
      goalsFor: teamInfo.all.goals.for,
      goalsAgainst: teamInfo.all.goals.against,
      goalsDifference: teamInfo.goalsDiff,
      clubSymbol: teamInfo.team.logo
    }
  })
  setTableData(table)
}

const getResultsFromString = (string) => {
  return string.toLowerCase().split('')
}
