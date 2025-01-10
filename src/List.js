import React, { Component } from 'react'
import Item from './Item'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            nums: [1, 2, 3, 4, 5, 6]
        }
    }

    render(){
        return this.state.nums.map((num)=>
            <Item number ={num}/>
        )

    }
}

export default List