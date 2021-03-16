import React,{useState} from 'react'
import {FormCard} from './Utils'

export default function WorksContact(props) {


    const title = 'Get in touch.'
    const desc = `We’d love to weave a grand story for your brand. 
                    Consider us as a friend,colleague, family who will play along 
                    in creating a bigger, better, bolder brand for you, for the masses, 
                    for ages! `
    

    return (
        <>
            <FormCard title={title} desc={desc} form={<ContactForm/>}  />
        </>
    )
}





const ContactForm = ()=>{

    const [values,setValues] = useState({
        userName:'',
        email:'',
        phone:'',
        company:'',
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
   

    const {userName,email,phone,company,message} = values

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
                <input type="text" name='company' value={company} onChange={handleChange('company')} className="form-control" placeholder='company/product'/>
            </div>
            <div className="form-group">
                <textarea type="textarea" name='message' value={message}  onChange={handleChange('message')} className="form-control" placeholder='message'/>
            </div>
            <div className="space-20"></div>
            <div className="btn btn-danger">
                Submit
            </div>
        </div>
    )
}