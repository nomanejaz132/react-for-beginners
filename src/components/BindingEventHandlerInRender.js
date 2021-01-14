import React, { Component } from 'react'

class BindingEventHandlerInRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Event Binding'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Event Binding in render method using bind keyword'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.clickHandler.bind(this)}>Click Here!</button>
            </div>
        )
    }
}

export default BindingEventHandlerInRender
