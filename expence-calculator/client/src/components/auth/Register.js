import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import '../../asets/css/shared/shared.css'
import '../../asets/css/auth/Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            date_of_birth: null,
            telephone: null,
            country: null,
            password: null,
            isAuthenticated: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    redirectToMain = () => {
        if (this.state.isAuthenticated) {
            return <Redirect to='/products' />
        }
    }

    registerUser = (event) => {
        if (this.state.first_name === null ||
            this.state.last_name === null ||
            this.state.email === null ||
            this.state.date_of_birth === null ||
            this.state.telephone === null ||
            this.state.country === null ||
            this.state.password === null) {
            event.preventDefault()
            alert("Please fill in the required fields:")
        } else if (this.state.first_name != null ||
            this.state.last_name != null ||
            this.state.email != null ||
            this.state.date_of_birth != null ||
            this.state.telephone != null ||
            this.state.country != null ||
            this.state.password != null) {
            event.preventDefault()
            axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                date_of_birth: this.state.date_of_birth,
                telephone: this.state.telephone,
                country: this.state.country,
                password: this.state.password,
                _created: new Date(),
            })
                .then(res => {
                    setTimeout(() => {
                        axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login',
                            {
                                email: this.state.email,
                                password: this.state.password
                            })
                            .then(res => {
                                localStorage.setItem('jwt', res.data.jwt);
                                localStorage.setItem('first_name', this.state.first_name);
                                localStorage.setItem('last_name', this.state.last_name);
                                this.setState({ isAuthenticated: true });


                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }, 1000)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.redirectToMain()}
                
                <div id="register">
                    <div className="box-container-register">
                        <form action="" className="form-box">
                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">First Name</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Last Name</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">E-mail</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Date of Birth</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Telephone</label>
                                <input type="number" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Country</label>
                                <input type="text" className="text-field" />
                            </p>

                            <p className="input-container">
                                <label htmlFor="" className="text-field-input">Password</label>
                                <input type="password" className="text-field" />
                            </p>

                            <button className="primary-button long">Register</button>

                        </form>
                    </div>

                    <div className="additional-info">
                        <p>
                            Or if you already have and account,
                        <Link to="/">Sing in</Link>
                        </p>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Register