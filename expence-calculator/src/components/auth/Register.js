import React from 'react'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import '../../asets/css/shared/shared.css'
import '../../asets/css/auth/Register.css'

const Register = () => {
    return (
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
    )
}

export default Register