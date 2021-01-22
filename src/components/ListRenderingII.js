import React from 'react'

function ListRenderingII() {
    const persons = [
        {
            id: 1,
            name: 'Keanu Reeves',
            age: 30,
            skill: 'John Wick'
        },
        {
            id: 2,
            name: 'Henry Cavill',
            age: 33,
            skill: 'Geralt of Rivia'
        },{
            id: 3,
            name: 'Rami Malek',
            age: 28,
            skill: 'Elliot Alderson'
        }        
    ]
    const personsList = persons.map(person => <p>I'm {person.name}, I'm {person.age} year old, I play role of {person.skill}</p>)
    return (
        <div>
            {personsList}
        </div>
    )
}

export default ListRenderingII
