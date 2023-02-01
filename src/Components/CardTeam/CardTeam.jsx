import React from 'react'
import './CardTeam.css'

function CardTeam({ index, name, img, job }) {
  return (
  <div className='card-team'>
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>{job}</p>
  </div>
  )
}

export { CardTeam }