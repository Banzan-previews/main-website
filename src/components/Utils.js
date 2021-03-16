import React from 'react'

import { animated, useSpring } from "react-spring";

export const ActionButton = ({_text,_width})=> {

    const style = {
        bg:{
            background:'#c42f48',
        },
        btn:{
            cursor:'pointer',
            width:_width?_width:'100px',
            borderRadius:'20px',
            textAlign:'center',
            padding:'10px',
            color:'white',
            textDecoration:'none'
        }
    }

    const changeAngle = (deg)=> `rotateY(${deg}deg)`

    const [springProps,setSpringProps] = useSpring(()=>({
        angle:0,
        color:'#c42f48',
        config: { mass:2,tension:170,friction:56 },

    }))
    

    return (
        <div className="btn">

        <div 
            onMouseEnter = {()=>{setSpringProps({angle:360,color:'#f9c847'})}}
            onMouseLeave = {()=>{setSpringProps({angle:0,color:'#c42f48'})}}
            className='text-decoration-none'
        >
            <animated.div style={{
                ...style.btn,
                transform:springProps.angle.interpolate(changeAngle),
                backgroundColor:springProps.color
            }}
            
            className='small font-weight-bold'
            >
                {_text}
            </animated.div>
        </div>
        </div>

    )
}




export const FormCard = ({title,desc,form})=>{

    const style={
        shadow:{
            boxShadow:'0px 0px 10px 5px rgba(184, 184, 184, 0.797)',
            padding:'50px',
            borderRadius:'20px',
            backgroundColor:'white'
        },
        iconImg:{
            maxWidth:'100px',
            borderRadius:'10px'
        }
    }

    return(
        <>
            <div className="container ">
                <div style={{...style.shadow}}>
                    <div className="space-20"></div>
                    <div className="row text-center text-md-left">
                        <div className="col-12 col-md-6 ">
                            <div className="h5 font-weight-bold text-now">
                                {title}
                            </div>
                            <div className="space-20"></div>
                            <div className="h6 font-weight-light">
                                {desc}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {form}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>

    )

}