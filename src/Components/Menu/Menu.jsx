import React from 'react'
import { useState } from 'react'
import './Menu.css'
import { useEffect } from 'react';
import { Link} from "react-router-dom";




const itemsMenu = [
  { "index": 1, "name": "Home" },
  { "index": 2, "name": "Services" },
  { "index": 3, "name": "Portfolio" },
  { "index": 4, "name": "Blog" },
  { "index": 5, "name": "About" },
  { "index": 6, "name": "Contact" }
]

const iconmenu = "https://w1.pngwing.com/pngs/176/555/png-transparent-drawing-of-family-watermelon-cartoon-painting-flat-design-fursonas-food-fruit.png"

function Menu() {

  const [stateMenuMobile, setStateMenuMobile] = useState()
  const itemsMenuLi = itemsMenu.map(itemMenu =>
    <li key={itemMenu.index} className="itemMenu">
      <Link to={`/${itemMenu.name}`}>
        {itemMenu.name}
      </Link>
    </li>
  )

  useEffect(() => {
    setStateMenuMobile(false)
  }, []);

  const setOpen = () => {
    setStateMenuMobile(true)
  }

  const setClose = () => {
    setStateMenuMobile(false)
  }

  return (
    <nav>
        <div className='menuDesktop'>
          <img src={iconmenu} alt="" />

          <ul className="menuDesktop__items">{itemsMenuLi}</ul>
        </div>

        <div className={`menuMobile ${stateMenuMobile ? "menuMobile-active" : ""}`}>

          <div className='containner-btns'>
            <img src="https://imgs.search.brave.com/tUmEmX_y1JeDttqeRdtQ8TBZm2TOw4xnOaRBLCnCYNU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/R1JsYXVxX1JEbkt5/Tm9PT25Qd0R3SGFI/YSZwaWQ9QXBp" alt="" />

            <div onClick={setClose} className={`btnMenu ${stateMenuMobile ? "btnActive" : "btnHidden"}`}>
              X
            </div>

            <div onClick={setOpen} className={`btnMenu ${stateMenuMobile ? "btnHidden" : "btnActive"}`}>
              =
            </div>
          </div>
          <ul className={`menuMobile__items ${stateMenuMobile ? "menuOpen" : "menuClose"}`}>{itemsMenuLi}</ul>

        </div>
    </nav>
  )
}

export { Menu }