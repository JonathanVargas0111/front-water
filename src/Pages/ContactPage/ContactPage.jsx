import React from 'react'
import { Contact } from '../../Components/Contact/Contact'
import { TemplatePage } from '../../Components/TemplatePage'

function ContactPage() {
  return (
    <TemplatePage>
      <h1>Contact</h1>
      <Contact></Contact>
    </TemplatePage>
  )
}

export {ContactPage}