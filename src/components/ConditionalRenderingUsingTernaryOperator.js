import React, { Component } from 'react'

export class ConditionalRenderingUsingTernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    render() {
        return (
            this.state.isLoggedIn ? (<div>Conditional Rendering using ternary operator.</div>) : (<div>Condition is false</div>)
        )
    }
}

export default ConditionalRenderingUsingTernaryOperator
