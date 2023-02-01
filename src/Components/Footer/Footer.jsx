import React from 'react'
import './Footer.css'

const socialNetworks = [
    { "index": 1, "name": "Facebook", "icon": "F", "link": "" },
    { "index": 2, "name": "Linkedin", "icon": "IN", "link": "" },
    { "index": 3, "name": "Instagram", "icon": "[O]", "link": "" },
]

const itemsMenu = [
    { "index": 1, "name": "Home" },
    { "index": 2, "name": "Services" },
    { "index": 3, "name": "Portfolio" },
    { "index": 4, "name": "Blog" },
    { "index": 5, "name": "About" },
    { "index": 6, "name": "Contact" }
]

const socialNetworksItems = socialNetworks.map(itemSocial =>
    <li key={itemSocial.index}>{itemSocial.name}</li>
)

const itemsMenuLi = itemsMenu.map(itemMenu =>
    <li key={itemMenu.index}>{itemMenu.name}</li>
)

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_network'>
                <h2 className='footer_network__title'>WaterMelon-Code</h2>
                <ul className='footer_network__items'>
                    {socialNetworksItems}
                </ul>
            </div>
            <nav className='footer_nav'>
                <ul className='footer_nav__items'>
                    {itemsMenuLi}
                </ul>
            </nav>
            <p className='footer__text'>Bogotá D.C. Colombia ©2022 - WaterMelon-Code. Todos los derechos reservados.</p>
        </footer>
    )
}

export { Footer }
