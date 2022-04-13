import axios from 'axios'

export const getNextMatch = async (setNextMatch) => {
  const fixtureResponse = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      },
      params: {
        league: '39',
        season: '2021',
        team: '33',
        next: '1'
      }
    }
  )

  const fixtureData = fixtureResponse.data //axios
  const nextMatchDTO = fixtureData.response[0]

  const homeResponse = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/teams',
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      },
      params: {
        id: nextMatchDTO.teams.home.id
      }
    }
  )

  const homeData = homeResponse.data
  const homeCode = homeData.response[0].team.code

  const awayResponse = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/teams',
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      },
      params: {
        id: nextMatchDTO.teams.away.id
      }
    }
  )

  const awayData = awayResponse.data
  const awayCode = awayData.response[0].team.code

  const nextMatch = {
    date: getDateFromISO(nextMatchDTO.fixture.date),
    place: nextMatchDTO.fixture.venue.name,
    time: getTimeFromISO(nextMatchDTO.fixture.date),
    homeClub: homeCode,
    awayClub: awayCode,
    homeSymbol: nextMatchDTO.teams.home.logo,
    awaySymbol: nextMatchDTO.teams.away.logo
  }

  setNextMatch(nextMatch)
}

const getDateFromISO = (ISO) => {
  const date = new Date(ISO)
  const day = date.getDate()
  const month = date.getMonth() + 1
  return `${addZero(day)}/${addZero(month)}`
  // const day = ISO.substring(8, 10)
  // const month = ISO.substring(5, 7)
  // return `${day}/${month}`
}

const getTimeFromISO = (ISO) => {
  const date = new Date(ISO)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${addZero(minutes)}`

  // if (minutes < 10) {
  //   return `${hours}:0${minutes}`
  // } else {
  //   return `${hours}:${minutes}`
  // }
}

const addZero = (number) => {
  return number < 10 ? `0${number}` : number
}
