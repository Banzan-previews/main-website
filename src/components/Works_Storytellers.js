import React from 'react'
import {ActionButton} from './Utils'
// import { animated, useSpring } from "react-spring";


import bablah from '../Assets/bablah_1.png'

export default function Storytellers(props) {

    // const changeAngle = (deg)=> `rotate(${deg}deg)`

    // const springProps = useSpring({
    //     angle:-20,
    //     from:{angle:-20},
    //     to:async(next)=>{
    //         while(true){
    //             await next({angle:20})
    //             await next({angle:-20})
    //         }
    //     }
    // })
    

    return (
        <>
        <div className="container">
            <div className="space-5 bg-light"></div>
            <div className="space-50"></div>
            <div className="h2 text-center text-md-left">
                STORYTELLERS
            </div>
            <div className="space-50"></div>
            <div className="row text-center text-md-left">
                <div className="col-12 col-md-6">
                    <div className="h5 font-weight-bold">
                        BaBlah! 
                    </div>
                  
                    <div className="space-20"></div>
                    <div className="h6 ">
                        BaBlah is our friend, philosopher and guide. 😇 
                        He’s our li’l monk who never had a ferrari.   🚘   
                        All he has is a twisted sense of humour 😉 and a love for the common man and his daily life 🥰. He’s on a journey to humorise our daily lives with his unique sense of Blah! 😎 
                    </div>
                    <div className="space-20"></div>
                    <a href="https://www.instagram.com/gobablah/" target="_blank" rel="noreferrer">
                        <ActionButton _text='Follow Bablah and stay blessed!' _width='250px' _link='https://www.instagram.com/gobablah/' />
                    </a>
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={bablah}   alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="space-50"></div>

        </div>  
        </>
    )
}
