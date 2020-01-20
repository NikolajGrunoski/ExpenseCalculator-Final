import React from 'react'

const ExpencesTableRow = (props) => {
    return (
        <tr>
            <td>{props.productName}</td>
            <td>{props.productType}</td>
            <td>{props.productDescription}</td>
            <td>{props.purchaseDate}</td>
            <td>{props.productPrice}</td>
        </tr>
    )
}

export default ExpencesTableRow