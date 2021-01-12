import React from 'react'

function DestructuringPropsInFunctionalComponentII(props) {
    const {value} = props
    return (
        <div>
            This {value} is from props through destructuring in function body.
        </div>
    )
}

export default DestructuringPropsInFunctionalComponentII
