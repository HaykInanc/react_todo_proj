import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({todos, del, change_done}) {
    return (
    <div>
        {
            todos.map(elem => 
                <ToDoItem 
                    key={elem.id} 
                    del={del} 
                    change_done={change_done} 
                    {...elem}/>)
        }
    </div>
  )
}