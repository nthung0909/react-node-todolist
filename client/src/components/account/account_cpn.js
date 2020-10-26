import React,{memo} from "react";
const axios=require('axios');

class acc_component extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
    return(
        <tr>
            <td>{this.props.acc.ID}</td>
            <td>{this.props.acc.username}</td>
            <td>{this.props.acc.password}</td>
            <td>{this.props.acc.name}</td>
            <td>{this.props.acc.email}</td>
            <td>{this.props.acc.type===1?'admin':'normal user'}</td>
            <td><a onClick={()=>{this.onDeleteClick(this.props.ID)}} style={{color:'red'}}>
            <i className='x icon'></i></a> &nbsp;&nbsp;
            <a style={{color:'green'}}><i className='pencil icon'></i></a>
            </td>
        </tr>
    )}
}


export default acc_component