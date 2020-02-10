import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import { getProducts, getTotalPrice } from "../../redux/actions/productAction";
import store from '../../redux/store'
import { connect } from 'react-redux'
import Table from '../table/Table'

import '../../asets/css/expences/Expenses.css'
import '../../asets/css/shared/shared.css'


class Expences extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monthlyDisplay: false,
            yearlyDisplay: true,
            active: false,
            monthlySelected: null,
            yearlySelected: null

        }
        this.year = (new Date()).getFullYear() - 20;
        this.years = Array.from(new Array(21), (val, index) => index + this.year);
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
    }
    componentDidMount() {
        axios.get("/app/v1/products/?sort=date:desc",
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
                store.dispatch(getProducts(res.data))
                let totalPrice = 0;
                for (let i = 0; i < res.data.length; i++) {
                    totalPrice += parseInt(res.data[i].price)
                }
                this.props.getTotalPrice(totalPrice);
                console.log('didMount')
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate() {
        if (this.state.yearlySelected === 'all') {
            axios.get("/app/v1/products/?sort=date:desc",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data));
                    let totalPrice = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        totalPrice += parseInt(res.data[i].price)
                    }
                    this.props.getTotalPrice(totalPrice);

                })
                .catch(err => {
                    console.log(err);
                })



        } else if (this.state.yearlySelected != null && this.state.yearlySelected.length === 4 && !this.state.monthlyDisplay) {
            let dateFrom = new Date(`${this.state.yearlySelected}-01-01 00:00:00.000`).getTime()
            let dateTo = new Date(`${this.state.yearlySelected}-12-31 23:59:59.000`).getTime()
            console.log(dateFrom + ' ' + dateTo)
            axios.get(`/app/v1/products/?date_from=${dateFrom}&date_to=${dateTo}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data))
                    let totalPrice = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        totalPrice += parseInt(res.data[i].price)
                    }
                    this.props.getTotalPrice(totalPrice);
                })
                .catch(err => console.log(err));
        } else if (this.state.monthlySelected === 'months') {
            axios.get("/app/v1/products/?sort=date:desc",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data));
                    let totalPrice = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        totalPrice += parseInt(res.data[i].price)
                    }
                    this.props.getTotalPrice(totalPrice);

                })
                .catch(err => {
                    console.log(err);
                })
        } else if (this.state.monthlySelected != null && this.state.yearlySelected != null && this.state.monthlyDisplay) {
            console.log('Vleze')
            var monthNum;
            for (let i = 0; i < this.months.length; i++) {
                if (this.state.monthlySelected === this.months[i]) {
                    monthNum = i + 1;
                    if (i.toString().length === 1) {
                        monthNum = "0" + monthNum.toString();;
                    }
                }

            }
            console.log(monthNum + 'Month is')
            let dateFrom = new Date(`${this.state.yearlySelected}-${monthNum}-01 00:00:00.000`).getTime()
            console.log(monthNum + 'Month is')
            let dateTo = new Date(`${this.state.yearlySelected}-${monthNum}-31 23:59:59.000`).getTime()
            console.log(dateFrom + " " + dateTo)
            console.log(monthNum + 'Month is')
            axios.get(`/app/v1/products/?date_from=${dateFrom}&date_to=${dateTo}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {

                    store.dispatch(getProducts(res.data));
                    let totalPrice = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        totalPrice += parseInt(res.data[i].price)
                    }
                    this.props.getTotalPrice(totalPrice);
                    console.log(dateFrom + " " + dateTo)

                })
                .catch(err => console.log(err));
        }
    }

    yearlySelect = () => {
        this.setState({ monthlyDisplay: false, yearlyDisplay: true, active: false, yearlySelected: 'all', monthlySelected: null })
    }

    monthlySelect = () => {
        this.setState({ yearlyDisplay: false, monthlyDisplay: true, active: true, monthlySelected: 'months', yearlySelected: null, })
    }

    yearlySelectHandler = (event) => {
        this.setState({ yearlySelected: event.target.value })
    }
    monthlySelectHandler = (event) => {
        this.setState({ monthlySelected: event.target.value })
    }



    render() {

        let yearly =
            <select name="year-select" className="month-select" onChange={this.yearlySelectHandler}>
                <option defaultChecked value='all' > ALL</option>
                {this.years.map((year, index) => {
                    return <option key={`year${index}`} value={year}>{year}</option>
                })}
            </select>



        let monthly = (
            <select name="month-select" className="month-select select-box" onChange={this.monthlySelectHandler}>
                <option defaultChecked value='months'>Month</option>
                {this.months.map((month, index) => {
                    return <option key={`month${index}`} value={month}>{month}</option>
                })}
            </select>)

        let yearMonthly = (
            <div className="yearMonthly-div">
                {monthly}
                {yearly}
            </div>
        )

        return (
            <React.Fragment>
                <Header />
                <h3 id="expenses-h3">Expenses</h3>
                <div className="expenses-div">
                    <Link to="#"><button className={!this.state.active ? 'active-btn select-btn' : 'select-btn'} onClick={this.yearlySelect}>Yearly</button></Link>
                    <Link to="#"><button className={this.state.active ? 'active-btn select-btn' : 'select-btn'} onClick={this.monthlySelect}>Monthly</button></Link>
                    <div className="select-div">
                        {this.state.monthlyDisplay ? <label htmlFor="month-select">Choose month :</label> : <label htmlFor="year-select">Choose year:</label>}
                        {this.state.monthlyDisplay ? yearMonthly : yearly}
                    </div>
                </div>
                <Table />
                <div className="transparent-div">
                    <p>Total spent:<span>{this.props.totalPrice}</span> den.</p>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalPrice: state.productReducer.totalPrice
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTotalPrice: price => dispatch(getTotalPrice(price)),

    };
}

// <div id='expenses'>
//     <p className='expences-par'>Expenses</p>
//     <div className="tabs">
//         <button className="button active">MONTHLY</button>
//         <button className="button">YEARLY</button>

//         <form className="checklist">
//             <p>
//                 <label>Chose Month:</label>
//                 <select id="myList">
//                     <option value="0">January</option>
//                     <option value="1">February</option>
//                     <option value="2">March</option>
//                     <option value="3">April</option>
//                     <option value="4">May</option>
//                     <option value="5">June</option>
//                     <option value="6">July</option>
//                     <option value="7">August</option>
//                     <option value="8">September</option>
//                     <option value="9">October</option>
//                     <option value="10">November</option>
//                     <option value="11">December</option>
//                 </select>
//             </p>
//         </form>

//     </div>
//     <ExpencesTable />
// </div>



// export default Expences

export default connect(mapStateToProps, mapDispatchToProps)(Expences)