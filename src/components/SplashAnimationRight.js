import React from 'react'
import { animated, useSpring } from "react-spring";


export default function Splashtransition({bgColor}) {

    const [sideSpringLoop] = useSpring(()=>({
        from:{ Splash_width: '0%',left:0,right:'unset'},
        to: async next =>{
            await next({Splash_width:'100%'})
            await next({left:'unset',right:0})
            await next({Splash_width:'0%'})   
        },
    }))

    const style = {
        body:{
                height: '100vh',
                position: 'fixed',
                zIndex: 800,
                
        }
    }

    return (
        <>
        {<animated.div 
            style={{
                width: sideSpringLoop.Splash_width,
                left:sideSpringLoop.left,
                right:sideSpringLoop.right,
                ...style.body,
                backgroundColor:bgColor?bgColor:'black',
            }} 
            className="sidebar-animation-what-we-do"></animated.div>}    
        </>
    )
}
