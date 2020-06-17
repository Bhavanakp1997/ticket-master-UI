import React from 'react'
import {Link} from 'react-router-dom'
import axios from './config/axios'

class Customer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
            customer:[]
        }
    }
    handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }
    
   

render(){
    return(
        <div>
        <h1>Customers -{props.customer.length}</h1>
         <table border="1">
     <thead> 
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Actions</th>
        <th>Remove</th>
      </tr>
     </thead>
      <tbody>
      {
         
      }
       <tr>
       
       {/*<td><button >show</button></td>*/}
       {/* <td><button >remove</button></td>*/}
       </tr>
      </tbody>
    </table>

       <button> <Link to="/form"> Add Customer</Link></button>
        </div>
       
    )
}
}

export default Customer