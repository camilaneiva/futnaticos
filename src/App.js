import { Menu } from './components/Menu'
import { LastMatchesSummary } from './components/LastMatchesSummary'

function App() {
  return (
    <>
      {/* <Menu /> */}
      <LastMatchesSummary results={['l', 'w', 'w', 'w', 'd']} />
      <LastMatchesSummary results={['l', 'l', 'w', 'l', 'd']} />
      <LastMatchesSummary results={['d', 'l', 'w', 'l', 'd']} />
    </>
  )
}

export default App
