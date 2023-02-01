import React from 'react'
import './SectionTeam.css'
import {CardTeam} from '../CardTeam'

const listTeam = [
    {
        "index": 1,
        "name": "Juan juan",
        "img": "https://picsum.photos/50/50?random=2",
        "job": "Developer"
    },
    {
        "index": 2,
        "name": "Juan kiss",
        "img": "https://picsum.photos/50/50?random=1",
        "job": "Developer"
    },
    {
        "index": 3,
        "name": "Fernando",
        "img": "https://picsum.photos/50/50?random=3",
        "job": "Developer"
    }
]

function SectionTeam() {
    return (
        <section className='section_teams'>
            <h2 className='section_teams__title'>Teams</h2>
            <div className='section_teams__teams'>
                {
                listTeam.map(employee=>(
                    <CardTeam 
                    key={employee.index}
                    name={employee.name}
                    img={employee.img}
                    job ={employee.job}
                    />
                    ))
                }
            </div>
        </section>
    )
}

export { SectionTeam }