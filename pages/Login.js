import React from 'react'
import Link from "next/link"
import pic from '../public/images/login.jpg';
import Image from 'next/image';

const Login = () => {
  return (
    <>
            <section>
       <div className='l-container'>
            <div className='l-small-container'>
              <div className='l-min-container l-image-container '>
                    <figure>
                        <Image className='l-signup-figure' src={pic} alt='Registration ' />
                    </figure>
                    <Link href = '/Register' className='l-signup-image-link' >Create New account</Link>
                </div>
                <div className='l-min-container'>
                    <h2 className='l-sign-head'>Login</h2>
                    <form className='l-register-form'>
                        
                        <div className='l-form-group'>
                            <label htmlFor='Email'>
                            <i className="zmdi zmdi-email zmdi-hc-lg" />
                            </label>
                            <input type="email" name = "Email" id='Email' autoComplete='off'
                            placeholder='Your Email' className = 'r-form-input' />
                        </div>
                       
                       
                        <div className='l-form-group'>
                            <label htmlFor='category'>
                            <i className="zmdi zmdi-assignment-account zmdi-hc-lg" />
                            </label>
                            <input type="radio" name = "category" id='hire' autoComplete='off'
                            value='hire'  className = 'l-form-radio'/>Hire
                            <input type="radio" name = "category" id='work' autoComplete='off'
                            value='work'  className = 'l-form-radio'/>Work
                        </div>
                        
                        <div className='l-form-group'>
                            <label htmlFor='password'>
                            <i className="zmdi zmdi-lock zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "password" id='password' autoComplete='off'
                            placeholder='Your password' className = 'l-form-input' />
                        </div>
                       
                        <div className='l-form-group l-form-button'>
                            <input type = 'submit' value = 'Login' id='Login' name='login' 
                            className='l-button-input' />
                        </div>
                    </form>

                </div>
               
            </div>
       </div>
     </section>  
    </>
  )
}

export default Login  