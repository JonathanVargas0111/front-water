import React from 'react'
import './ListServices.css'
import { CardService } from '../CardService'

const services = [
    {
        "index": "1",
        "service": "Service 1",
        "description": "Lorem ipsum dolor, sit amet consectetur",
        "img": "https://picsum.photos/50/50?random=2"

    },
    {
        "index": "2",
        "service": "Service 2",
        "description": "Lorem ipsum dolor, sit amet consectetur",
        "img": "https://picsum.photos/50/50?random=3"

    },
    {
        "index": "3",
        "service": "Service 3",
        "description": "Lorem ipsum dolor, sit amet consectetur",
        "img": "https://picsum.photos/50/50?random=4"

    },
    {
        "index": "4",
        "service": "Service 4",
        "description": "Lorem ipsum dolor, sit amet consectetur",
        "img": "https://picsum.photos/50/50?random=5"
    },
    {
        "index": "5",
        "service": "Service 5",
        "description": "Lorem ipsum dolor, sit amet consectetur",
        "img": "https://picsum.photos/50/50?random=6"
    },
]

function ListServices() {
    return (
        <section className='list-services'>
            <h2 className='section_teams__title'>Services</h2>
            <div>
                {
                    services.map(service => {
                        return (
                            <CardService
                                key={service.index}
                                img={service.img}
                                service={service.service}
                                description={service.description}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export { ListServices }