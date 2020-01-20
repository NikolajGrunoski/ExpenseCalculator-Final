import React from 'react'
import Navbar from '../navbar/Navbar'
import Products from './Products'
import { Link } from 'react-router-dom'



class ProductsPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="general-products-container">
                    <Navbar />
                    <Products />
                </div>
                <Link to="/newproduct"><button className="fixed-button" onClick={this.goToNewProduct}>NEW PRODUCT</button></Link>
            </React.Fragment>
        )
    }
}

export default ProductsPage