import React, { Component } from 'react'

class SetStateInClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: "This value is the initial State in Class Component"
        }
    }

    changeState() {
        this.setState({
            value: "This value is the changed State in Class Component "
        })
    }
    
    
    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={()=> this.changeState()}>Change State</button>
            </div>
        )
    }
}

export default SetStateInClassComponent
