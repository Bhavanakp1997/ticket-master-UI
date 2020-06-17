import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
        username:'',
        email:'',
        password:''
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username :this.state.username,
            email:this.state.email,
            password:this.state.password

        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        //console.log(formData)
        //this.props.dispatch(startRegisterUser(formData,this.props))
        this.props.dispatch(startRegisterUser(formData, redirect))
        this.setState({
            username:'',
            email:'',
            password:''

        })
    }

    render(){
        return(
            <div> 
              <h2>Register</h2>
              <form onSubmit={this.handleSubmit}>
              {/*<label htmlFor="username">username</label>*/}
              <input 
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              placeholder="Username"
              /><br/>

              {/*<label htmlFor="email">email</label>*/}
              <input 
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              placeholder="Email"
              /><br/>

            {/*<label htmlFor="password">password</label>*/}
            <input 
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            /><br/>
            <input type="submit" value="register"/>

            </form>

            </div>
        )
    }
}

export default connect()(Register)