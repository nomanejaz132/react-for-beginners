import React from 'react'

function ListRenderingI() {
    const names = ['Witcher', 'Geralt', ' John Wick']
    const namesList = names.map(name => <h5>{name}</h5>)
    return (
        <div>
            {namesList}
        </div>
    )
}

export default ListRenderingI
