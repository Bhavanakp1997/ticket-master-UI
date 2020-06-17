import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Customer from './cust/Customer'
import Form from './cust/Form'

 function App(props){
    return(
        <BrowserRouter>
        <div>
          <h2>Ticket Master</h2>
          <Link to="/"> Home</Link>
          {
            Object.keys(props.user).length!==0 ? (
              <div>
                <Link to="/customers">Customer</Link> -
                <Link to="/department">Departments</Link>-
                <Link to="/employees">Employees</Link>-
                <Link to="/Ticket">Ticket</Link>-
                <Link to="#">Logout</Link>
              </div>
            ):(
              <div>
              <Link to ="/users/register">Register</Link> -
              <Link to="/users/login">Login</Link>
              
              </div>
            )
          }
          

          <Switch>
            <Route path="/" component={Home} exact ={true}/>
            <Route path="/users/register" component={Register}/>
            <Route path="/users/login" component={Login}/>
            <Route path="/customers" component={Customer}/>
            <Route path="/form" component={Form}/>
          </Switch>
          </div>
         </BrowserRouter>
         
    ) 
 }
 const mapStateToProps =(state)=>{
   return {
     user:state.user
   }
 }

 export default connect(mapStateToProps)(App)