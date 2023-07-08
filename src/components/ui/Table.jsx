import React from 'react'

export const Table = ({ columns, data, loading }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map((item, key) => (
            <th key={key}>{item.title}</th>
          ))}
        </tr>
      </thead>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <tbody>
          {data.map((dataItem, i) => (
            <tr key={i}>
              {columns.map((columnItem, k) => (
                <td key={k}>
                  {Boolean(columnItem.dataKey)
                    ? dataItem[columnItem.dataKey]
                    : columnItem.render(dataItem)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}
