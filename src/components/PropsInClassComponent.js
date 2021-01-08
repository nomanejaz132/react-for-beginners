import React, { Component } from 'react'

class PropsInClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default PropsInClassComponent
