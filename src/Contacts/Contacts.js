import React, { useEffect } from 'react'
import './Contacts.css'
import { FaTwitterSquare,FaInstagramSquare,FaLinkedin,FaPhone,FaRegSmileBeam } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const onSubmit = async (formData) => {
 
    formData.access_key="aeda5f49-067a-4bab-a629-b9b103bbd74a";
    const json = JSON.stringify(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  const form=useForm({
    defaultValues:{
      name:'',
      email:'',
      message:''
    }
  })
  const{register,formState,reset,handleSubmit}=form
  const{isSubmitSuccessful,errors}=formState
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful,reset])
  return (
    <>
    <div id='contacts' className='contacts'>
    <div className='cont'>
       <h1>contacts</h1>
    </div>
    <div className='contact-list'>
        <div className='icons'>
        <h2>contact me</h2>
        <p>You reach out to me through any of the following platforms <br/>and lets discuss on the project you want to build</p>
        <ul>
            <li><FaLinkedin/> PASCALINE MAHORO</li>
            <li><FaInstagramSquare/> peacepascy</li>
            <li><FaTwitterSquare/> twitter</li>
            <li><MdEmail/> paixpascy24@gmail.com</li>
            <li><FaPhone/> +250787402048</li>
        </ul>
        </div>
        <div className='msg'>
            <p>please leave a message <FaRegSmileBeam /></p>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='name'>full name</label>
              <input placeholder=' Your name'type='text'id='name' name='name' {...register('name', { required: true })} ></input>
              <p className='errors'>{errors.email?.message}</p>
              <label htmlFor='email'>valid email</label>
              <input placeholder=' Your email' id='email' type='text'name='email'{...register('email',{required:'email is required',pattern:
              {value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:'invalid'}})} required></input><p className='errors'>{errors.email?.message}</p>
              <label htmlFor=''>write your message here</label><br/>
              <textarea name='message' rows='10' {...register('message', { required: true })}></textarea><br/>
              <button type='submit' className='submit'>submit</button>
            </form>
          </div>    
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Contacts
