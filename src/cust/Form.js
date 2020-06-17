import React from 'react'
import {Link} from 'react-router-dom' 

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log(formData)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
          <div>
            <h1>Add Customer</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            /><br/>
             <label>Email</label>
            <input type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            /><br/>
             <label>Mobile</label>
            <input type="text"
            value={this.state.mobile}
            onChange={this.handleChange}
            name="mobile"
            /><br/>
            <input type="submit"/>
             
            </form>
          </div>
        )
    }
}

export default Form