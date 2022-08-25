import React from 'react'

export default function ToDoForm({create}) {

  const submit = event=>{
    event.preventDefault();
    const {todo}  = event.target;
    create(todo.value);
    todo.value = '';
  }

  const form_style = {
    display: 'flex'
  };

  return (
    <form style={form_style} onSubmit={submit}>
        <input placeholder='описание' type="text" name='todo' />
        <button>Добавить</button>
    </form>
  )
}
