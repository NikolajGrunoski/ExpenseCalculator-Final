import React from 'react'
import '../../asets/css/auth/Login.css'
import '../../asets/css/shared/shared.css'
import { Link } from 'react-router-dom'
// import ProductsPage from '../products/ProductsPage'

class Login extends React.Component {

    render() {
        return (
            <div id='login'>
                <div className="box-container">
                    <form action="" className="form-box">
                        <p className="input-container">
                            <label htmlFor="" className="text-field-input">E-mail</label>
                            <input type="text" className="text-field" />
                        </p>

                        <p className="input-container">
                            <label htmlFor="" className="text-field-input">Password</label>
                            <input type="password" className="text-field" />
                        </p>

                        <Link to='/products'><button className="primary-button long">Sing in</button></Link>

                    </form>
                </div>




                <div className="additional-info">
                    <p>
                        Or if you don't have and account,
                    <Link to="/register"> Register</Link>
                    </p>
                </div>
            </div>
        )
    }


}

export default Login