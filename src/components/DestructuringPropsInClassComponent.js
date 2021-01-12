import React, { Component } from 'react'

class DestructuringPropsInClassComponent extends Component {
    render() {
        const {value} = this.props
        return (
            <div>
            This {value} is from props through destructuring in render method.
            </div>
        )
    }
}

export default DestructuringPropsInClassComponent
