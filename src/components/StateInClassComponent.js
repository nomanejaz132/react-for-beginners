import React, { Component } from 'react'

class StateInClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: "This value is the initial State in Class Component"
        }
    }
    
    render() {
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}

export default StateInClassComponent
