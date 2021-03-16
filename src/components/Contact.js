import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer' 

import {FormCard} from './Utils'

import SplashAnimationLeft from './SplashAnimationLeft'
// import SplashAnimationRight from './SplashAnimationRight'



export default function Contact(props) {
    
    const title = 'Drop us a message.'
    const desc = `& we’d get started soon!`

    useEffect(() => {
        window.scrollTo(0, 0)
    
    }, [])


    return (
        <>
            <Navbar/>
            <SplashAnimationLeft bgColor='#f7b745'  />
            {/* <SplashAnimationRight bgColor='#f7b745'  /> */}
            <div className="space-100"></div>
            <FormCard title={title} desc={desc} form={<ContactForm/>}/> 
            <div className="space-20"></div>
            <Footer/>
        </>
    )
}

const ContactForm = ()=>{

    const [values,setValues] = useState({
        userName:'',
        email:'',
        phone:'',
        company:'',
        linkedin:'',
        message:''
    })

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const handleChangePhone = name => event =>{
        const re = /^[0-9\b]+$/;
        if(event.target.value === ''|| re.test(event.target.value)){
            setValues({...values,[name]:event.target.value})
        }
    }
    

    const {userName,email,phone,company,message,linkedin} = values

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
                <input type="text" name='linkedin' value={linkedin} onChange={handleChange('linkedin')} className="form-control" placeholder='LinkedIn'/>
            </div>
            <div className="form-group">
                <input type="text" name='company' value={company} onChange={handleChange('company')} className="form-control" placeholder='company/product'/>
            </div>
            <div className="form-group">
                <textarea type="textarea" name='message' value={message}  onChange={handleChange('message')} className="form-control" placeholder='What are you looking for?'/>
            </div>
            <div className="space-20"></div>
            <div className="btn btn-danger">
                Submit
            </div>
        </div>
    )
    
}
