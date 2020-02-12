import React from 'react'
import './card-list.style.scss'
import { Card } from '../card/card.component'

export const CardList = props => (
  <div className="card-list">
    {props.users.map(user => (
      <Card id={user.id} key={user.id} title={user.name} />
    ))}
  </div>
)
