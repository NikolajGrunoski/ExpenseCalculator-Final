import React from 'react'
import ProuctsTbodyData from './ProductsTbodyData'
import { Link } from 'react-router-dom'

class ProductsTable extends React.Component {
    render() {
        return (
            <div className="table-container">
                <table style={{ width: '90%' }}>
                    <thead>
                        <tr className="header-line">
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                            <th> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="row-lines">
                            <td>Coca Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td className='edit-delete-btn'>
                                <button className="edit-del-btn"><i className="far fa-edit"></i></button>
                                <Link to='./alert'><button className="edit-del-btn"><i className="far fa-trash-alt"></i></button></Link>
                            </td>
                        </tr>
                        <ProuctsTbodyData />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductsTable