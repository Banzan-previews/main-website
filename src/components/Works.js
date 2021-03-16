import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import Games from './Works_Games'
import Storytellers from './Works_Storytellers'
import WorksBranding from './Works_Branding'
import Digital from './Work_Digital'
import Contact from './Works_contact'


import SplashAnimationLeft from './SplashAnimationLeft'
// import SplashAnimationRight from './SplashAnimationRight'


export default function Works(props) {

   
    

    return (
        <>
            <Navbar/>
            <SplashAnimationLeft bgColor='#f7b745'  />
            {/* <SplashAnimationRight bgColor='#f7b745'  /> */}
            <div className="space-100"></div>
            <section id='games'>
                <Games/>
            </section>
            <div className="space-100"></div>
            <section id='storytellers'>
                <Storytellers/>
            </section>
            <div className="space-100"></div>
            <section id='worksbranding'>
                <WorksBranding/>
            </section>
            <div className="space-50"></div>
            <section id='digital'>
                <Digital />
            </section>
            <div className="space-50"></div>
            <section id='contact'>
                <Contact/>
            </section>
            <div className="space-50"></div>
            <Footer/>  
        </>
    )
}

