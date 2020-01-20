import React from '../../../node_modules/react'

const ProductsTableRow = (props) => {
    return (
        <tr>
            <td>{props.productName}</td>
            <td>{props.productType}</td>
            <td>{props.productDescription}</td>
            <td>{props.purchaseDate}</td>
            <td>{props.productPrice}</td>
            <td className='edit-delete-btn'><button className="edit-del-btn"><i className="far fa-edit"></i></button><button className="edit-del-btn"><i className="far fa-trash-alt"></i></button></td>
        </tr>
    )
}

export default ProductsTableRow