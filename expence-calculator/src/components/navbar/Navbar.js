import React from 'react'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import '../../asets/css/shared/shared.css'
import profile from '../../asets/images/profile-picture.jpg'

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <header>
                    <div className="buttons">
                        <Link to='/products'> <button className="ghost-button">PRODUCTS</button> </Link>
                        <Link to='/expences'> <button className="solid-button">EXPENSES</button> </Link>
                    </div>

                    <div className="profile-picture">
                        <img src={profile} alt="#" className="picture" />
                        <h1 className="username">Nikolaj Grunoski</h1>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar