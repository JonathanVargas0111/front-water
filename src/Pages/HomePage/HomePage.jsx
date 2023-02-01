import React, { useState, useEffect } from 'react'
import { TemplatePage } from '../../Components/TemplatePage'
import {ListServices} from '../../Components/ListServices/ListServices'
import {SectionProjects} from '../../Components/SectionProjects/SectionProjects'
import { Contact } from './../../Components/Contact/Contact';
import { ContainerPostBlog } from '../../Components/ContainerPostBog/ContainerPostBlog';
import { SectionAbout } from '../../Components/SectionAbout/SectionAbout';



function HomePage() {

 /*  const [imgHeader, setImgHeader] = useState([])

  useEffect(() => {

    fetch('https://water.toryskateshop.com/wp-json/wp/v2/pages')
      .then((response) => {
        const data = response.json()
        console.log(data)
        return data
      })
      .then((page) => {
        const img = page[0].ACF.slider[0].desktop
        setImgHeader(img)
      })
  
    }, [])
 */

  return (
    <>  
        <TemplatePage>
          <div>
            {/* <img src={imgHeader}/> */}
          </div>
          <ListServices/>
          <SectionProjects/>
          <ContainerPostBlog/>
          <SectionAbout/>
          <Contact/>
        </TemplatePage>
    </>
  )
}

export {HomePage}