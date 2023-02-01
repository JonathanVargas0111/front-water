import React from 'react'

import './SectionProjects.css'
import { CardProject } from '../CardProject/CardProject'

const listProyects = [
  {
    "index": "1",
    "project": "Projects 1",
    "description": "Lorem ipsum dolor, sit amet consectetur",
    "img": "https://picsum.photos/600/300?random=1"
  },
  {
    "index": "2",
    "project": "Projects 2",
    "description": "Lorem ipsum dolor, sit amet consectetur",
    "img": "https://picsum.photos/600/300?random=2"
  },
  {
    "index": "3",
    "project": "Projects 3",
    "description": "Lorem ipsum dolor, sit amet consectetur",
    "img": "https://picsum.photos/600/300?random=3"
  },
  {
    "index": "4",
    "project": "Projects 4",
    "description": "Lorem ipsum dolor, sit amet consectetur",
    "img": "https://picsum.photos/600/300?random=4"
  },
  {
    "index": "5",
    "project": "Projects 5",
    "description": "Lorem ipsum dolor, sit amet consectetur",
    "img": "https://picsum.photos/600/300?random=5"
  },
]


function SectionProjects() {
  return (
    <section className='section_projects'>
      <h2 className='section_projects__title'>Portfolio</h2>
      <div className='section_projects__list'>
        {
          listProyects.map(project => {
            return(
              <CardProject
                key={project.index}
                index={project.index}
                project={project.project}
                description={project.description}
                img={project.img}
              />
            )
          })
        }
      </div>
      <button className='section_project__button'>Ver mas</button>
    </section>
  )

}

export { SectionProjects }