import React from 'react'
import { TableRow } from '../TableRow'

export const Table = () => {
  return (
    <>
      <table>
        <tr>
          <th colSpan={3}>Clube</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>Últimas cinco</th>
        </tr>

        <TableRow />
      </table>
    </>
  )
}
