import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import art1 from '../Assets/phone_1_art.png'
import art3 from '../Assets/phone_3_art.png'
import art2 from '../Assets/phone_2_art.png'
import art4 from '../Assets/phone_4_art.png'

import Flip from 'react-reveal/Flip';
import { ActionButton } from './Utils'

const star = <svg fill='#f9c847' width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>


export default function Herocontent(props) {

    const style = {

        shift: {
            transform: `translateY(-20px)`,
        },
        imgSize: {
            maxWidth: '420px',
            width: '100%'
        }
    }


    return (
        <div style={{ ...style.shift }} className="container">
            {/* ====================== */}
            <div className="row">
                <div className="col-12 col-md-6 text-dark">
                    <Flip top   >
                        <ContentBox>
                            <div className="h4 font-weight-bold text-center text-md-left">GAME STUDIOS</div>
                            <div className="space-20"></div>
                            <div className="h6 font-weight-light text-center text-md-left">
                                We build casual, fun, addictive, yet productive
                                and sometimes, educational games for Family audiences.
                            </div>
                            <div className="space-20"></div>
                            <div className="text-now h6 font-weight-bold text-center text-md-left">
                                Our Game Philosophy
                            </div>
                            <div className="space-10"></div>
                            <div className="d-flex">
                                <div className="p-2">
                                    {star} No Violence
                                </div>
                                <div className="p-2">
                                    {star} No Profanity
                                </div>
                                <div className="p-2">
                                    {star} No Negativity
                                </div>
                            </div>
                            <div className="space-10"></div>
                            <div className="small font-weight-bold text-center text-md-left">
                                WE AIM TO ENHANCE USER EXPERIENCE AND ENGAGEMENT THROUGH OUR BOUQUET OF GAMES.
                            </div>
                            <div className="space-10"></div>
                            <div className="text-center text-md-left">
                                <HashLink smooth to='/works#games'>
                                    <ActionButton _text='See our games' _width='150px'/>
                                </HashLink>
                                <HashLink to='/works'>
                                    <ActionButton _text='Share an idea' _width='150px'/>
                                </HashLink>
                            </div>
                        </ContentBox>
                    </Flip>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                    <img style={{ ...style.imgSize }} src={art1} alt="" className="img-fluid d-none d-md-block" />
                </div>
            </div>
            {/* ======================== */}
            <div className="space-100"></div>
            {/* ======================== */}
            <div className="row">
                <div className="col-12 col-md-6 text-center text-md-right">
                    <img style={{ ...style.imgSize }} src={art3} alt="" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-12 col-md-6 text-dark">
                    <Flip  top  >
                        <ContentBox>
                            <div className="h4 font-weight-bold text-center text-md-left">DIGITAL STORYTELLERS</div>
                            <div className="space-20"></div>
                            <div className="h6 font-weight-light text-center text-md-left">
                                We create Digital Assets and tell Digital stories.
                                <br />
                                We specialise in creating stories and assets that engages and creates long term relations across a wide audience.
                                Our expertise is in high customer touchpoint businesses, digital or physical.
                                <br />
                                We look forward to helping brands and products who wish to enhance their customer journey through a better engagement and holistic strategy that provides a longer stickiness and thus, a higher ROI.
                            </div>
                            <div className="space-10"></div>
                            <div className="text-center text-md-left">
                                <HashLink smooth to='/works#storytellers'>
                                    <ActionButton _text='Discover' _width='150px'/>
                                </HashLink>
                                <HashLink smooth to='/works#contact'>
                                    <ActionButton _text='Wanna talk engagement?' _width='200px'/>
                                </HashLink>
                            </div>

                        </ContentBox>
                    </Flip>
                </div>
            </div>
            {/* ======================== */}
            <div className="space-100"></div>
            {/* ======================== */}
            <div className="row">
                <div className="col-12 col-md-6 text-dark">
                    <Flip top   >
                        <ContentBox>
                            <div className="h4 font-weight-bold text-center text-md-left">
                                {`Branding & Advertising`}
                            </div>
                            <div className="space-20"></div>
                            <div className="h6 font-weight-light text-center text-md-left">
                                Whether you need to build stronger brand,
                                take new products to market, grow existing market share,
                                an ad campaign that captivates audience or simply need some brand collaterals,
                                we’ll get you there.

                            </div>
                            <div className="space-10"></div>
                            <div className="text-center text-md-left">
                                <HashLink smooth to='/works#worksbranding'>
                                    <ActionButton _text='Discover' _width='150px'/>
                                </HashLink>
                                
                            </div>

                        </ContentBox>
                    </Flip>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                    <img style={{ ...style.imgSize }} src={art2} alt="" className="img-fluid d-none d-md-block" />
                </div>
            </div>
            {/* ======================== */}
            <div className="space-100"></div>
            {/* ======================== */}
            <div className="row">
                <div className="col-12 col-md-6 text-center text-md-right">
                    <img style={{ ...style.imgSize }} src={art4} alt="" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-12 col-md-6 text-dark">
                    <Flip top   >
                        <ContentBox>
                            <div className="h4 font-weight-bold text-center text-md-left">
                                Digital
                            </div>
                            <div className="space-20"></div>
                            <div className="h6 font-weight-light text-center text-md-left">
                                We believe in the power of omni-channel approach to match the demands of todays always-on world.
                                With a portfolio of ideas and cross-platform experiences,
                                we know how to connect,
                                influence behaviours and shift perceptions.

                            </div>
                            <div className="space-10"></div>
                            <div className="text-center text-md-left">
                                <HashLink smooth to='/works#digital'>
                                    <ActionButton _text='Discover' _width='150px'/>
                                </HashLink>
                                
                            </div>

                        </ContentBox>
                    </Flip>
                </div>

            </div>



            <div className="space-100"></div>
        </div>
    )
}


const ContentBox = ({ children }) => {

    const style = {
        shadow: {
            boxShadow: '0px 0px 10px 5px rgba(184, 184, 184, 0.797)',
            padding: '4px',
            borderRadius: '20px',
            backgroundColor: 'white'
        },
    }

    return (
        <div style={{ ...style.shadow, ...style.shift }} className='p-4'>
            <div className="space-50"></div>
            {children}
            <div className="space-50"></div>
        </div>
    )
}