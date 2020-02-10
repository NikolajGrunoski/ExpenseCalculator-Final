import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { saveUserName } from '../../redux/actions/userAction'

import '../../asets/css/auth/Login.css'
import '../../asets/css/shared/shared.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            error: null
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

    logIn = (event) => {
        event.preventDefault();
        axios.post('/app/v1/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                localStorage.setItem('jwt', res.data.jwt);
                localStorage.setItem('first_name', res.data.first_name);
                localStorage.setItem('last_name', res.data.last_name);
                this.setState({ isAuthenticated: true, error: false })
                const user = localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name');
                this.props.saveUserName(user)
            })
            .catch(err => {
                this.setState({ error: true })
                console.log(err)
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.redirectToMain()}

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

            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName: state.productReducer.userName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveUserName: name => dispatch(saveUserName(name)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)