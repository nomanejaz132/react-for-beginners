import React, { Component } from 'react'

export class ConditionalRenderingUsingShortCircuitOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Conditional rendering using short circuit operator.</div>
    }
}

export default ConditionalRenderingUsingShortCircuitOperator
