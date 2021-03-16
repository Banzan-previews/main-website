import React, { useState } from 'react'
import { animated, useSpring } from "react-spring";

export default function Burgermenu({bgColor}) {

    const[hover,setHover] = useState(false)
    
    const style = {
        strip:{
            height: '3px',
            width:'20px',
            backgroundColor: bgColor?bgColor:'#c42f48',
            position: 'relative',
        },
        // angle:{
        //     transform: hover? `rotate(0deg)` :`rotate(-30deg)`,
        // },
        big:{
            width:'30px'
        },
        align_center:{
            margin:'auto',
            marginBottom: '4px',
        }
    }

    const changeAngle = (deg)=> `rotate(${deg}deg)`

    const [springProps,setSpringProps] = useSpring(()=>({
        angle: -30,
        big: '30px',
    }))


    return (
        <animated.div  
            style={{transform : springProps.angle.interpolate(changeAngle),cursor:'pointer'}}
            onMouseEnter={()=>{setSpringProps({angle:0,big:'20px'})}}
            onMouseLeave={()=>{setSpringProps({angle:-30,big:'30px'})}}
            className={'p-2'}
            >
            <animated.div  style={{...style.strip,...style.align_center}} ></animated.div>
            <animated.div  style={{...style.strip,width: springProps.big,...style.align_center}} ></animated.div>
            <animated.div  style={{...style.strip,...style.align_center}} ></animated.div>
        </animated.div>
    )
}


