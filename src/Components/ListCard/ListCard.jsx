import React from 'react'
import {CardWebsite} from '../CardWebsite/CardWebsite'


const listWebs = [
    {
        "index": 1,
        "name": "Web 1",
        "img": "https://picsum.photos/seed/picsum/600/100?random=1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "linkWeb":"www.google.com"
    },
    {
        "index": 2,
        "name": "Web 2",
        "img": "https://picsum.photos/seed/picsum/600/100?random=1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "linkWeb":"www.google.com"
    },
    {
        "index": 3,
        "name": "Web 3",
        "img": "https://picsum.photos/seed/picsum/600/100?random=1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "linkWeb":"www.google.com"
    },
    {
        "index": 4,
        "name": "Web 4",
        "img": "https://picsum.photos/seed/picsum/600/100?random=1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "linkWeb":"www.google.com"
    },
]

function ListCard() {
    const listCards = listWebs.map(web =>
        <CardWebsite
            key={web.index}
            nameWeb = {web.name}
            imageWeb = {web.img}
            description = {web.description}
        />)
    return (
        <section>
            {listCards}
        </section>
    )
}

export { ListCard }
