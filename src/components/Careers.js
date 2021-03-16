import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import {FormCard} from './Utils'


import SplashAnimationLeft from './SplashAnimationLeft'
// import SplashAnimationRight from './SplashAnimationRight'

import posterWhite from '../Assets/poster_white.png'

export default function Careers(props) {

    const title = 'Let’s see what you got?!'
    const desc = `If you wish to explore career opportunities with us, 
                keep a tab on our Social Media handles and this page for 
                opportunities as they arise or alternatively just fill up 
                the form below and let’s see what you got and where we can take 
                this ahead! `
    
    

    return (
        <>
            <Navbar/>
            <SplashAnimationLeft bgColor='#c42f48'  />
            {/* <SplashAnimationRight bgColor='#f7b745'  /> */}
            <div className="space-100"></div>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={posterWhite} alt=""/>
                </div>
            </div>
            <div className="space-50"></div>
            <div className="text-center h6">
                JOIN US
            </div>
            <FormCard title={title} desc={desc} form={<JoinForm/>}/>
            <div className="space-50"></div>
            <Footer/>
        </>
    )
}

const JoinForm = ()=>{
    const [values,setValues] = useState({
        userName:'',
        email:'',
        phone:'',
        education:'',
        willing:'yes',
        pref:'fulltime',
        whyus:'',
    })

    const {userName,email,phone,education,willing,pref,whyus} = values

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const handleChangePhone = name => event =>{
        const re = /^[0-9\b]+$/;
        if(event.target.value === ''|| re.test(event.target.value)){
            setValues({...values,[name]:event.target.value})
        }
    }
   


    return(
        <div className="form">
            <div className="form-group">
                <input type="text" name='name' value={userName} onChange={handleChange('userName')} className="form-control" placeholder='name'/>
            </div>
            <div className="form-group">
                <input type="email" name='email' value={email} onChange={handleChange('email')} className="form-control" placeholder='email'/>
            </div>
            <div className="form-group">
                <input type="text"  pattern="^-?[0-9]\d*\.?\d*$" name='phone' value={phone} onChange={handleChangePhone('phone')} className="form-control" placeholder='phone'/>
            </div>
            <div className="form-group">
                <input type="text" name='education' value={education} onChange={handleChange('education')} className="form-control" placeholder='Your highest level of education'/>
            </div>
            <div className="form-group">
                <label htmlFor="willing">Are you willing to relocate</label>
                <select name="" id="willing" 
                        className='form-control'
                        onChange={handleChange('willing')}
                        value={willing} >
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="pref">Job preference</label>
                <select name="" id="pref" 
                        className='form-control'
                        onChange={handleChange('pref')}
                        value={pref} >
                    <option value="fulltime">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Remote">Remote</option>
                    <option value="Any">Any</option>
                    
                </select>
            </div>
            <div className="form-group">
                <textarea type="textarea" name='whyus' value={whyus}  onChange={handleChange('whyus')} className="form-control" placeholder='Why us? (We would definitely want to know why we matter in your life!)'/>
            </div>
            <div className="space-20"></div>
            <div className="btn btn-danger">
                Submit
            </div>
        </div>
    )
}

