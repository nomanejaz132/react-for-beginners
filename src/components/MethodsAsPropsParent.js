import React, { Component } from 'react'
import MethodsAsProps from './MethodsAsProps'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName: 'Parent'
        }
        this.renderParent = this.renderParent.bind(this)
    }

    renderParent(childName) {
        alert (`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <MethodsAsProps renderParent={this.renderParent} />
            </div>
        )
    }
}

export default MethodsAsPropsParent
