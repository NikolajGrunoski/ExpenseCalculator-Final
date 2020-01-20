import React from 'react'
import ExpencesTable from './ExpencesTable'
import '../../asets/css/expences/Expenses.css'
import '../../asets/css/shared/shared.css'

class Expences extends React.Component {
    render() {
        return (
            <div id='expenses'>
                <p className='expences-par'>Expenses</p>
                <div className="tabs">
                    <button className="button active">MONTHLY</button>
                    <button className="button">YEARLY</button>

                    <form className="checklist">
                        <p>
                            <label>Chose Month:</label>
                            <select id="myList">
                                <option value="0">January</option>
                                <option value="1">February</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
                            </select>
                        </p>
                    </form>

                </div>
                <ExpencesTable />
            </div>
        )
    }
}

export default Expences