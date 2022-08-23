import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({data}) {
    return (
    <div>
        {
            data.map(elem => <ToDoItem key={elem.id} {...elem}/>)
        }
    </div>
  )
}

