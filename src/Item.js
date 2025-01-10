import React, { Component } from 'react'

class Item extends Component{
    
    render(){
        return(
            <li>{this.props.number} <button> X </button> </li>
        )
    }
}

export default Item