import React from 'react'

function MethodsAsProps(props) {
    return (
        <div>
            <button onClick={() => props.renderParent('Child')}>Parent Component</button>
        </div>
    )
}

export default MethodsAsProps
