
import React,{useState} from 'react'
import {Link} from 'react-router-dom'


import logo_image from '../Assets/Banzan_logo_head.png'
import BurgerMenu from './BurgerMenu'

import NavMenu from './NavMenu'

export default function Navbar(props) {

    const style = {
        shadow:{
            boxShadow:'0px 0px 5px rgba(184, 184, 184, 0.797)',
            padding:'4px',
            borderRadius:'10px',
            backgroundColor:'white'
        },
        fixed:{
            position:'fixed',
            width:'90%',
            marginLeft:'5%',
            marginTop:'15px',

        }
    }

    const [open,setOpen] = useState(false)

    const toggleMenu=(val)=>{
        open?setOpen(false):setOpen(true)
        if(val){
            setOpen(true)
        }
    }

    return (
        <>
            <div style={{...style.shadow,...style.fixed}} className="nav-bar">
                {open? <NavMenu toggleMenu={toggleMenu}  />:''}
                <div  className="container">
                    <div className="space-10"></div>
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link to='/' >
                            <img src={logo_image} alt=""/>
                            </Link>
                        </div>
                        <div className="logo">
                            <div  onClick={()=>{toggleMenu(true)}}>
                                <BurgerMenu  />
                            </div>
                        </div>
                    </div>
                    <div className="space-10"></div>
                </div>
            </div>
        </>
    )

   
}


