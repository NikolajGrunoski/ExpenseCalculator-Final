import React from 'react'
import ExpencesTableRow from './ExpencesTableRow'
import data from '../data'

const ExpencesTbodyData = () => {
    // let new_data = []
    // for (let i = 0; i < data.length; i++) {
    //     new_data.push(<ExpencesTableRow key={data[i].id}
    //         productName={data[i].productName}
    //         productType={data[i].productType}
    //         productDescription={data[i].productDescription}
    //         purchaseDate={data[i].purchaseDate}
    //         productPrice={data[i].productPrice} />
    //     )
    // }
    // return (new_data)
    return data.map((d, i) => {
        return <ExpencesTableRow key={d.id}
                productName={d.productName}
                productType={d.productType}
                productDescription={d.productDescription}
                purchaseDate={d.purchaseDate}
                productPrice={d.productPrice} />
    });
}

export default ExpencesTbodyData