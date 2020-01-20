import ReactDOM from 'react-dom'
import React from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProductsPage from './components/products/ProductsPage'
import NewProduct from './components/newProduct/NewProduct'
import ExpencesPage from './components/expences/ExpencesPage'
import Alert from './components/alert/Alert'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const app = document.getElementById('root')



const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path ='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/products' component={ProductsPage}/>
                <Route exact path='/newproduct' component={NewProduct}/>
                <Route exact path='/expences' component={ExpencesPage}/>
                <Route exact path='/alert' component={Alert}/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes/>, app) 