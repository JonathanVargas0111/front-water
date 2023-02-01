import React from 'react'

import {AboutPage, HomePage, ServicesPage,BlogPage, PortfolioPage, ContactPage} from '../Pages/index'
/* import {HomePage} from '../Pages/HomePage/HomePage'
import {ServicesPage} from '../Pages/ServicesPage/ServicesPage'
import {BlogPage} from '../Pages/BlogPage/BlogPage' */
 



import {Routes, Route} from 'react-router-dom'


function AppRouter() {
  return (
    <Routes>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Services' element={<ServicesPage/>}/>
        <Route>
            <Route path=':id' element=""></Route>
        </Route>
        <Route path='/Blog' element={<BlogPage/>}/>
        <Route>
            <Route path=':id' element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path='/Portfolio' element={<PortfolioPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>

        <Route path='*' element={<HomePage/>}/>


        <Route></Route>

    </Routes>
  )
}

export {AppRouter}