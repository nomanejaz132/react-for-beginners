import React, { Component } from 'react'

class BindingEventHandlerUsingArrowFunctionAsClassProperty extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Event Binding'
        }
    }

    clickHandler = () => {
        this.setState({
            message: 'Event Binding using Arrow Function as Class property.'
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

export default BindingEventHandlerUsingArrowFunctionAsClassProperty
