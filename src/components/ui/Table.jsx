import React from 'react'

export const Table = ({ columns, data }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {
                        columns.map((item, key) => {
                            <th key={key}> {item.title} </th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dataItem, i) => (
                        <tr key={i}>
                            {
                                columns.map((columnItem, k) => (
                                    <td key={k}> { dataItem[columnItem.dataKey]} </td>
                                ))

                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
