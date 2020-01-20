import React from '../../../node_modules/react'
import ProductsTable from './ProductsTable'
import '../../asets/css/products/Products.css'

const Products = () => {
    return (
        <div id='products'>
            <div className="title-checkbox">
                <p className="title">Products</p>
                <form className="checklist-form">
                    <p>
                        <label>Filter by:</label>
                        <select id="myList">
                            <option value="0">Year</option>
                            <option value="1">Highest Price</option>
                            <option value="2">Lowest Price</option>
                            <option value="3">Latest Purchases</option>
                        </select>
                    </p>
                </form>
            </div>
            <ProductsTable />
        </div>
    )
}

export default Products