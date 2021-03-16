import React from 'react'
import {Link} from 'react-router-dom'
import { animated, useSpring } from "react-spring";



export default function Menu(props) {


    const [{width,color,opacity_}] = useSpring(() => ({
        width: "100%",
        color:"#c42f48",
        from: {  width: "30%",color:"#f7b745",opacity_:0},
        to:async (next)=>{
            await next({width:"30%"})
            await next({width:"10%"})
            await next({width:"100%"})
            await next({opacity_:1})
            await next({color:"#c42f48"})
        },
        config: { mass: 3, tension: 850, friction: 100 } ,
    }))

    const menuLink = [
        {
            text : 'Home',
            link:'/'
        },
        {
            text : 'Works',
            link:'/works'
        },
        {
            text : 'Career',
            link:'/career'
        },
        {
            text : 'People',
            link:'/'
        },
        {
            text : 'Contact',
            link:'/contact'
        },
    ]

    return (
        <>
            <animated.div style={{width:width,backgroundColor:color}}  className="menu-box">
                <animated.div style={{opacity:opacity_}} className="menu-box-content">
                    <div className="space-50"></div>
                    <div 
                        onClick={() => { props.toggleMenu() }} 
                        style={{ cursor: "pointer" }}
                        className="text-center text-white ">      
                        <svg width="24" height="24" fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
                    </div>
                    <div className="space-50"></div>
                    {
                        menuLink.map((val)=>(
                            <Link 
                                key={val.text}
                                onClick={() => { props.toggleMenu() }} 
                                to={`${val.link}`} >
                                <div className="div h3 text-center text-white menu-link p-3 text-decoration-none">
                                    {val.text}
                                    <div className="menu-link-underline"></div>
                                </div>
                            </Link>
                        ))
                    }
                    
                    <div className="space-20"></div>
                    

                </animated.div>
                    
            </animated.div>
        </>
    )
}
