import React from 'react'
import ProductsTableRow from './ProductsTableRow'
import data from '../data'

const ProductsTbodyData = () => {
    // let new_data = []
    // for (let i = 0; i < data.length; i++) {
    //     new_data.push(<ProductsTableRow key={data[i].id}
    //         productName={data[i].productName}
    //         productType={data[i].productType}
    //         productDescription={data[i].productDescription}
    //         purchaseDate={data[i].purchaseDate}
    //         productPrice={data[i].productPrice} />
    //     )
    // }
    // return (new_data)
    return data.map ((d, i) => {
        return <ProductsTableRow key={data[i].id}
                productName={data[i].productName}
                productType={data[i].productType}
                productDescription={data[i].productDescription}
                purchaseDate={data[i].purchaseDate}
                productPrice={data[i].productPrice} />
    });
}

export default ProductsTbodyData