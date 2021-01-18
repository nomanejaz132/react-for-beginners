import React, { Component } from 'react'

class BindingEventHandlerInConstructor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Event Binding'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Event Binding in constructor using bind keyword.'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.clickHandler}>Click Here!</button>
            </div>
        )
    }
}

export default BindingEventHandlerInConstructor
