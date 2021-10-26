import React from 'react'

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th> </th>
          {props.heads.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
}

export default Table
