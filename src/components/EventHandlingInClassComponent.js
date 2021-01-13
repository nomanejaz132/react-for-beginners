import React, { Component } from 'react'

class EventHandlingInClassComponent extends Component {
    clickHandler() {
        alert('Button Clicked!')
    }
    render() {
        return (
            <div>
                This is event handling in class component.
                <button onClick={this.clickHandler}>Click Here!</button>
            </div>
        )
    }
}

export default EventHandlingInClassComponent
