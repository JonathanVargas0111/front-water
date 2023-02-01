import React from 'react'
import { Contact } from '../../Components/Contact/Contact'
import { ListServices } from '../../Components/ListServices/ListServices'
import {SectionProjects} from '../../Components/SectionProjects/SectionProjects'
import { TemplatePage } from '../../Components/TemplatePage/TemplatePage'
import './ServicesPage.css'


function ServicesPage() {
    return (
        <>  
            <TemplatePage>
                <ListServices/>
                <SectionProjects/>
                <Contact/>
            </TemplatePage>
        </>
    )
}

export { ServicesPage }