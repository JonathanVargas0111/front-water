import React from 'react'

import { SelectGeneric } from '../../Components/SelectGeneric/SelectGeneric'
import { Footer } from '../../Components/Footer/index'
import { ListCard } from '../../Components/ListCard/ListCard'
import { Contact } from '../../Components/Contact/Contact'
import { TemplatePage } from '../../Components/TemplatePage'

let imgHeaderPortfolio = 'https://picsum.photos/seed/picsum/1200/350'

function PortfolioPage() {

  const handleChange = (event) => {
    const categorySelect = event.target.value
    console.log(categorySelect)
  }


  return (
    <TemplatePage>
      <h1 className='titlePortfolioPage'>Portfolio</h1>
      <div className='headerPortfolioPage'>
        <img
          className='headerP__img'
          src={imgHeaderPortfolio}
          alt="image header portfolio" />
      </div>
      <SelectGeneric />
      <ListCard />
      <Contact></Contact>
    </TemplatePage>
  )
}

export { PortfolioPage }