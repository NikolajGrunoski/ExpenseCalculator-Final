import React from 'react'
import ExpencesTbodyData from './ExpencesTbodyData'

const ExpencesTable = () => {
    return (
        <div className="table-expenses">
            <div className="table-container">
                <table style={{ width: '90%' }}>
                    <thead>
                        <tr className="header-line">
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="row-lines">
                            <td>Coca Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>
                        <ExpencesTbodyData />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExpencesTable