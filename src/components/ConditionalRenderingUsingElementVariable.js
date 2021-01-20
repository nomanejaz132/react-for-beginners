import React, { Component } from 'react'

export class ConditionalRenderingUsingElementVariable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    render() {
        let message
        if(this.state.isLoggedIn) {
            message = <div>Conditional Rendering using element variable.</div>
        } else {
            message = <div>Condition is false</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default ConditionalRenderingUsingElementVariable
