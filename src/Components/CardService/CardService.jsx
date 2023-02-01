import React from 'react'
import './CardService.css'

function CardService({index,img, service, description}) {
  return (
        <a href='#' className="card-service">
            <img src={img} alt={service.service} />
            <h3>{service}</h3>
            <p>{description}</p>
        </a>
  )
}

export {CardService}