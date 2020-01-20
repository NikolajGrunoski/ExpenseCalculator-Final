import React from 'react'
import Navbar from '../navbar/Navbar'
import Expences from './Expences'

class ExpencesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Expences />
                <div className="footer">
                    <h1 className='total-spent'>Total spent: 1205</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default ExpencesPage