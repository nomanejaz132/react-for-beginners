import React, { Component } from 'react'

class ConditionalRenderingUsingIfElse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return <div>Conditional Rendering using if else statement.</div>
        } else {
            <div>Condition is false.</div>
        }
    }
}

export default ConditionalRenderingUsingIfElse
