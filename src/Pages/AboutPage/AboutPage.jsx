import React from 'react'

import { SectionTeam } from '../../Components/SectionTeam/SectionTeam'
import { Contact } from '../../Components/Contact/Contact'
import { Footer } from '../../Components/Footer/index'

import './AboutPage.css'
import { TemplatePage } from '../../Components/TemplatePage'

function AboutPage() {
    return (
        <TemplatePage>
            <h1 className='titleAboutPage'>About</h1>
            <section className='section_text_a'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde exercitationem ab ducimus non quod recusandae, quas adipisci iure eaque dolorum officia dolore, laborum ea hic dicta perferendis. Consectetur, porro.
                    Iste optio commodi magnam delectus? Excepturi nulla eaque deleniti natus mollitia ea et ipsum, animi maiores, accusamus nesciunt provident eveniet voluptatem asperiores labore numquam tempore quidem. Esse non fugiat eligendi.
                    Corrupti aliquid consectetur quae inventore molestias? Maiores, excepturi consequatur aliquid eum ducimus aut sequi repellat explicabo necessitatibus, quod, suscipit sunt veritatis possimus ad sit esse cupiditate! Maiores quibusdam sit ratione!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum nesciunt doloremque rem velit molestiae iste, consectetur aperiam quia quibusdam voluptate. Eos quo tenetur aliquam? Est odit numquam nobis autem.
                    Totam distinctio debitis necessitatibus? Reprehenderit, quisquam accusantium? Cum a ipsam ratione veritatis quis nam odio hic distinctio sapiente, perferendis eaque eius dolores recusandae corporis accusantium autem inventore alias assumenda minima.</p>
            </section>
            <SectionTeam/>
            <Contact/>
        </TemplatePage>
    )
}

export { AboutPage }

