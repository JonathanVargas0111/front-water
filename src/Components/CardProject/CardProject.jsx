import React from 'react'
import './CardProject.css'

function CardProject({index, project, description, img}) {
    return (
        <div className="card_project">
            <img src={img} alt={project} />
            <div>
                <h2>{project}</h2>
                <a>See more</a>
            </div>
        </div>
    )
}

export { CardProject}