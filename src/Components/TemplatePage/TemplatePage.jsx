import React from 'react'
import { Footer } from '../Footer'
import { Menu } from '../Menu/Menu'
import './TemplacePage.css'

function TemplatePage(props) {
  return (
    <>
      <Menu/>
      <div className='template_page'>
          {props.children}
      </div>
      <Footer/>
    </>
  )
}

export {TemplatePage}