import React,{useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"
import pic from '../public/images/login.jpg';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import CategoryIcon from '@mui/icons-material/Category';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import WcIcon from '@mui/icons-material/Wc';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const Signup = () => {
    const router = useRouter()
    const [user , setUser] = useState({
        name:"",email:"",phone:"",gender:"",category:"",field:"",location:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user , [name]:value })
    }

    const postData = async (e) =>{
        e.preventDefault();

        const {name ,email ,phone ,gender,category , field, location , password , cpassword } = user;

        if(!name || !email || !phone|| !gender || !category || !field|| !location || !password || !cpassword ){

           return window.alert("please fill all the fields")
        }else{
            const res = await fetch( '/api/signup', {
                method : "POST" ,
                body: JSON.stringify({
                    name ,email ,phone ,gender,category , field, location , password , cpassword
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            });
    
           if(res.status == 200){
               window.alert("registration successful")
               router.push("/")
           }else if(res.status == 400){
               window.alert("Email Already Exists")
           }else if(res.status == 500){
               window.alert("server error data not saved")
           }
             
        }
    }
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
                            <PersonIcon fontSize='small' />
                            </label>
                            <input type="text" name = "name" id='name' 
                            value={user.name}
                            placeholder='Your Name'  className = 'r-form-input' onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Email'>
                            <EmailIcon fontSize='small' />
                            </label>
                            <input type="email" name = "email" id='Email' 
                            value={user.email}
                            placeholder='Your Email' className = 'r-form-input'  onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Phone'>
                            <PhoneIcon fontSize='small' />
                            </label>
                            <input type="number" name = "phone" id='Phone' 
                            value={user.phone}
                            placeholder='Your Phone' className = 'r-form-input'  onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='gender'>
                            <WcIcon fontSize='small' />
                            </label>
                            <input type="radio" name = "gender" id='male' 
                            value='male'  className = 'r-form-radio'  onChange={handleInputs}/>Male
                            <input type="radio" name = "gender" id='female' 
                            value='Female'  className = 'r-form-radio'  onChange={handleInputs}/>Female
                            <input type="radio" name = "gender" id='others' 
                            value='others'  className = 'r-form-radio' onChange={handleInputs} />others
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='category'>
                            <CategoryIcon fontSize='small'/>
                            </label>
                            <input type="radio" name = "category" id='hire' 
                            value='hire'  className = 'r-form-radio'  onChange={handleInputs}/>Hire
                            <input type="radio" name = "category" id='work'
                            value='work'  className = 'r-form-radio' onChange={handleInputs} />Work
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Field'>
                            <SlideshowIcon fontSize='small' />
                            </label>
                            <input type="text" name = "field" id='Field' 
                             value={user.field}
                            placeholder='Your Profession'  className = 'r-form-input' onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='Location'>
                            <AddLocationAltIcon fontSize='small'/>
                            </label>
                            <input type="text" name = "location" id='location' 
                             value={user.location}
                            placeholder='Your Location'  className = 'r-form-input' onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='password'>
                            <LockIcon fontSize='small'/>
                            </label>
                            <input type="text" name = "password" id='password' 
                             value={user.password}
                            placeholder='Your password' className = 'r-form-input' onChange={handleInputs} />
                        </div>
                        <div className='r-form-group'>
                            <label htmlFor='cpassword'>
                            <LockIcon fontSize='small'/>
                            </label>
                            <input type="text" name = "cpassword" id='cpassword' 
                             value={user.cpassword}
                            placeholder='confirm password'  className = 'r-form-input' onChange={handleInputs}/>
                        </div>
                        <div className='r-form-group r-form-button'>
                            <input type = 'submit' value = 'Register' id='signup' name='register' 
                            className='r-button-input' onClick={postData}/>
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

export default Signup;