import React from 'react'
import mountain from '../Assets/mountain.png'
import Typing from 'react-typing-animation';


export default function Hero(props){

    const style = {
        background:{
            backgroundImage:`url('${mountain}')`,
            backgroundSize:'cover',
            backgroundRepeat: 'repeat-x',
        },
        size:{
            height:'50vh'
        }
    }

    return(
        <div>
            <div style={{...style.size}} className="typewriter-text">
                <div className="container">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <Typing>
                        <span className='h1 text-dark font-weight-bold'>Hi There! <br/> </span>
                    </Typing>
                    <Typing loop={true}>
                        <Typing.Delay ms={1000}/>
                        <span className='h1 text-dark'>We make...</span>
                        <span className='h1 text-now'>Awesome Games</span>
                        <Typing.Delay ms={1000}/>
                        <Typing.Backspace count={24} />
                        <span className='h1 text-dark'>We make...</span>
                        <span className='h1 text-now'>Valuable Apps</span>
                        <Typing.Delay ms={1000}/>
                        <Typing.Backspace count={24} />
                        <span className='h1 text-dark'>We tell...</span>
                        <span className='h1 text-now'>Digital Stories</span>
                        <Typing.Delay ms={1000}/>
                        <Typing.Backspace count={26} />
                        <span className='h1 text-dark'>We gamify...</span>
                        <span className='h1 text-now'>Customer Journeys</span>
                        <Typing.Delay ms={1000}/>
                        <Typing.Backspace count={30} />
                        <span className='h1 text-dark'>We create...</span>
                        <span className='h1 text-now'>Long term Customer Engagement</span>
                        <Typing.Delay ms={1000}/>
                        <Typing.Backspace count={43} />
                     
                        
                    </Typing>
                </div>
            </div>
            <div style={{...style.background,...style.size}} className="hero">
                    {/*  Intentionally left empty */}
            </div>
        </div>
    )
}