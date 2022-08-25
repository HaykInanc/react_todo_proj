import React, { useState } from 'react'

export default function List() {
    const data = [
        {
            id: 1,
            title: 'пункт 1'
        },
        {
            id: 2,
            title: 'пункт 2'
        },
        {
            id: 3,
            title: 'пункт 3'
        }
    ];

    const [list, setList] = useState(data);
    const create = title => setList(
        [...list, 
            {
                id: Date.now(),
                title
            }
        ]);

    const del = id => setList(list.filter(point => point.id !== id));

    const submit = event => {
        event.preventDefault();
        const {title} = event.target;
        create(title.value);
        title.value = '';
    }

  return (
    <div>
        <div>List</div>
        <form onSubmit={submit}>
            <input placeholder='title' type="text" name='title'/>
            <button>Добавить</button>
        </form>
        <div>
            {
                list.map(elem => 
                    <p onDoubleClick={()=>del(elem.id)} 
                       key={elem.id}> 
                        {elem.title} 
                    </p>)
            }
        </div>
    </div>
  )
}
