import React from 'react'

function EventHandlingInFunctionalComponent() {
    function clickHandler(){
        alert('Button Clicked!')
    }
    return (
        <div>
            This is event handling in functional component.
            <button onClick={clickHandler}>Click Here!</button>
        </div>
    )
}

export default EventHandlingInFunctionalComponent
