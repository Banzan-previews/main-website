import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Hero from './Home_Hero'
import HeroContent from './Home_HeroContent'
import Footer from './Footer'

// import SplashAnimationLeft from './SplashAnimationLeft'
import SplashAnimationRight from './SplashAnimationRight'


export default function Home(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    
    }, [])
    

    return (
        <>
            <Navbar/>
            <SplashAnimationRight bgColor='#c42f48'  />
            <Hero/>
            <HeroContent/>
            <Footer/>
            
        </>
    )
}


