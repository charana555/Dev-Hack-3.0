import React from 'react'
import Link from "next/link"
import pic from '../public/images/login.jpg';
import Image from 'next/image';


const Signup = () => {
  return (
    <>
          <section>
       <div className='r-container'>
            <div className='r-small-container'>
                <div className='r-min-container'>
                    <h2 className='r-sign-head'>Sign Up</h2>
                    <form method='POST' className='r-register-form'>
                        <div className='r-form-group'>
                            <label htmlFor='name'>
                            <i className="zmdi zmdi-account zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "name" id='name' 
                            
                            placeholder='Your Name'  className = 'r-form-input'/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Email'>
                            <i className="zmdi zmdi-email zmdi-hc-lg" />
                            </label>
                            <input type="email" name = "email" id='Email' 
                            
                            placeholder='Your Email' className = 'r-form-input' />
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Phone'>
                            <i className="zmdi zmdi-phone zmdi-hc-lg" />
                            </label>
                            <input type="number" name = "phone" id='Phone' 
                            
                            placeholder='Your Phone' className = 'r-form-input' />
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='gender'>
                            <i className="zmdi zmdi-male-female zmdi-hc-lg" />
                            </label>
                            <input type="radio" name = "gender" id='male' 
                            value='male'  className = 'r-form-radio' />Male
                            <input type="radio" name = "gender" id='female' 
                            value='Female'  className = 'r-form-radio' />Female
                            <input type="radio" name = "gender" id='others' 
                            value='others'  className = 'r-form-radio' />others
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='category'>
                            <i className="zmdi zmdi-assignment-account zmdi-hc-lg" />
                            </label>
                            <input type="radio" name = "category" id='hire' 
                            value='hire'  className = 'r-form-radio' />Hire
                            <input type="radio" name = "category" id='work'
                            value='work'  className = 'r-form-radio' />Work
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Field'>
                            <i className="zmdi zmdi-slideshow zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "field" id='Field' 
                             
                            placeholder='Your Profession'  className = 'r-form-input'/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Location'>
                            <i className="zmdi zmdi-location zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "location" id='Field' 
                             
                            placeholder='Your Location'  className = 'r-form-input'/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='password'>
                            <i className="zmdi zmdi-lock zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "password" id='password' 
                             
                            placeholder='Your password' className = 'r-form-input' />
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='cpassword'>
                            <i className="zmdi zmdi-lock zmdi-hc-lg" />
                            </label>
                            <input type="text" name = "cpassword" id='cpassword' 
                             
                            placeholder='confirm password'  className = 'r-form-input'/>
                        </div>
                        <div className='r-form-group r-form-button'>
                            <input type = 'submit' value = 'Register' id='signup' name='register' 
                            className='r-button-input' />
                        </div>
                    </form>

                </div>
                <div className='r-min-container r-image-container '>
                    <figure>
                        <Image className='r-signup-figure' src={pic} alt='Registration ' />
                    </figure>
                    <Link href = '/Login' className='r-signup-image-link' >Already Have account ?</Link>
                </div>
            </div>
       </div>
     </section>
    </>
  )
}

export default Signup  