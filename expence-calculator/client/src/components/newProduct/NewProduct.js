import React from 'react'
import Navbar from '../navbar/Navbar'
import '../../asets/css/products/NewProduct.css'


class NewProduct extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="body-container">

                    <p className="title">New Product</p>

                    <div className="box-container-products">
                        <form action="" className="form-box">
                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Product Name</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Product Description</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Product Type</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Purchase Date</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Product Price</label>
                                <input type="number" className="text-field" />
                            </p>

                            <button className="primary-button long new-product">Create Product</button>

                        </form>
                    </div>

                    <div className="create-product">

                        <p className="add-button"><i className="fas fa-plus-circle"></i></p>
                        <h1>You are creating a new product</h1>
                    </div>
                </div>



            </React.Fragment>
        )
    }
}

export default NewProduct