import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
     handleSubmit=(e)=>{
      e.preventDefault()
      const formData={
          email:this.state.email,
          password:this.state.password
      }
      const redirect=()=>{
          return this.props.history.push('/')
      }
      this.props.dispatch(startLoginUser(formData, redirect))
        //console.log(formData)
     }

     handleChange=(e)=>{
         this.setState({
          [e.target.name] : e.target.value
          })
     }

    render(){
        return(
            <div>
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
              <input type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              name="email"
              /> <br/>
              <input type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              /><br/>
              <input type="submit" value="Login"/>

              </form>
            </div>
        )
    }
}

export default connect()(Login)