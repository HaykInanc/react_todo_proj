import React from 'react'
import { users } from './data/users';
import User from './User';

// изменить компонент User таким образом, чтобы в карточке пользователя выводились его имя, фамилия, email и аватар (текстом)
// использовать компонент User в UsersList и подставить данные руками (не из массива users)

export default function UsersList() {
  return (
    <div>
        {
            users.map(elem => <User key={elem.id} {...elem}/>)
        }
    </div>
  )
}