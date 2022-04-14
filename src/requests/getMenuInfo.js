import axios from 'axios'
import { clubColors } from '../design-system/clubColors'

export const getMenuInfo = async (setMenu) => {
  const response = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/standings',
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      },
      params: {
        season: '2021',
        league: '39',
        team: '33'
      }
    }
  )
  const data = response.data //axios
  console.log(data)
  const menuDTO = data.response[0].league.standings[0][0]

  const menu = {
    club: menuDTO.team.name,
    championship: 'Premier League',
    position: menuDTO.rank,
    points: menuDTO.points,
    clubSymbol: menuDTO.team.logo,
    clubColor: clubColors[menuDTO.team.id]
  }

  setMenu(menu)
}
