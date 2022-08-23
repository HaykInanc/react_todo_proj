import React from 'react'

export default function User({email, first_name, last_name, avatar}) {
  return (
    <div>
        <p>first_name: {first_name}</p>
        <p>last_name: {last_name}</p>
        <p>avatar: {avatar}</p>
        <p>email: {email}</p>
    </div>
  )
}