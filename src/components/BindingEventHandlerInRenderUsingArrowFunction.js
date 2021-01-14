import React, { Component } from 'react'

class BindingEventHandlerInRenderUsingArrowFunction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Event Binding'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Event Binding in render method using Arrow Function.'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={()=>this.clickHandler()}>Click Here!</button>
            </div>
        )
    }
}

export default BindingEventHandlerInRenderUsingArrowFunction
