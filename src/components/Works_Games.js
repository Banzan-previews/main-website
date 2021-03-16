import React from 'react'
// import {Link} from 'react-router-dom'

import Flip from 'react-reveal/Flip';

import app_icon_2 from '../Assets/app_icon_2.png'
import app_icon_1 from '../Assets/app_icon_1.png'


import {ActionButton} from './Utils'

export default function Games(props) {


    const style={
        shadow:{
            boxShadow:'0px 0px 10px 5px rgba(184, 184, 184, 0.797)',
            padding:'4px',
            borderRadius:'20px',
            backgroundColor:'white'
        },
        iconImg:{
            maxWidth:'100px',
            borderRadius:'10px'
        }
    }

    const _gamesData = [
        {
            id:'1',
            title:'NUMZY',
            desc:`NUMZY is our first baby out! It’s a simple, crazy number game that apart from being fun, tests your agility, vision,speed, simple calculations and brain power. It's timeless fun for all ages.`,
            icon:app_icon_1,
            action:'Check out NUMZY now!',
            link:'/',

        },
        {
            id:'2',
            title:'Yes/No with BaBla ',
            subtitle:'Fun Q&A game with a cute Monk',
            desc:`Yes/No with BaBlah is a fun Q&A game that rejuvenates your mood with quirky Q’s! BaBlah is a cute Monk who lives in the virtual world of Instagram as a daily comic strip.`,
            icon:app_icon_2,
            action:'Check out Yes/No now!',
            link:'/',
        }
    ]
    
    const Gamecard = ({icon,title,subtitle,desc,action,link})=>{
        return(
            <div style={{...style.shadow}} className="m-3">
                <div className="row p-4  text-center text-md-left">
                    <div className="col-12 col-md-4">
                        <div className="p-4">
                            <img  src={icon} style={{...style.iconImg}} alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="h4">
                            {title}
                        </div>
                        <div className="h4">
                            {subtitle}
                        </div>
                        <div className="small text-secondary">
                            {desc}
                        </div>
                        <div className="space-10"></div>
                        <a href={`${link}`} target='_blank' rel="noreferrer" >
                        <ActionButton _text={action} _width={'200px'}/>
                        </a>
                        
                    </div>
                </div>           
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="h2 text-center text-md-left">
                     GAMES
                </div>
                <div className="space-20"></div>
                <div className="row">
                    <div className="col-12">
                        {
                            _gamesData.map(games=>(
                                <Flip key={games.id} top delay={700} >
                                    <Gamecard  
                                        title={games.title} 
                                        subtitle={games.subtitle}
                                        desc={games.desc}
                                        icon={games.icon}
                                        action={games.action}
                                        link={games.link}
                                        />
                                </Flip>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
