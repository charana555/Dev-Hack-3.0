import React,{useState} from 'react'
import Link from "next/link"
import pic from '../public/images/login.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import EmailIcon from '@mui/icons-material/Email';
import CategoryIcon from '@mui/icons-material/Category';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",category:"",password:""
    });
    let name ,value ;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user , [name]:value })
    };

    const getData = async(e) =>{
        e.preventDefault();
        const {email,category,password} = user ;

        if(!email || !category || !password){
          return window.alert( "Enter all the fields")
        }else{
            const res = await fetch("/api/login",{
                method :"POST",
                body: JSON.stringify({
                    email , category ,password
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            });

            if(res.status == 200){
                window.alert("Login Successful")
                router.push("/")
            }else if(res.status == 400){
                window.alert("Invalid Credentials")
            }
        }


    }

  return (
    <>
            <section>
       <div className='l-container'>
            <div className='l-small-container'>
              <div className='l-min-container l-image-container '>
                    <figure>
                        <Image className='l-signup-figure' src={pic} alt='Registration ' />
                    </figure>
                    <Link href = '/Signup' className='l-signup-image-link' >Create New account</Link>
                </div>
                <div className='l-min-container'>
                    <h2 className='l-sign-head'>Login</h2>
                    <form method='POST' className='l-register-form'>
                        
                        <div className='l-form-group'>
                            <label htmlFor='Email'>
                            <EmailIcon fontSize='small' />
                            </label>
                            <input type="email" name = "email" id='Email' autoComplete='off' value={user.email}
                            placeholder='Your Email' className = 'r-form-input'  onChange={handleInputs} />
                        </div>
                       
                       
                        <div className='l-form-group'>
                            <label htmlFor='category'>
                            <CategoryIcon fontSize='small'/>
                            </label>
                            <input type="radio" name = "category" id='hire' autoComplete='off'
                            value='hire'  className = 'l-form-radio' onChange={handleInputs}/>Hire
                            <input type="radio" name = "category" id='work' autoComplete='off'
                            value='work'  className = 'l-form-radio' onChange={handleInputs}/>Work
                        </div>
                        
                        <div className='l-form-group'>
                            <label htmlFor='password'>
                            <LockIcon fontSize='small'/>
                            </label>
                            <input type="text" name = "password" id='password' autoComplete='off' value={user.password}
                            placeholder='Your password' className = 'l-form-input'  onChange={handleInputs}/>
                        </div>
                       
                        <div className='l-form-group l-form-button'>
                            <input type = 'submit' value = 'Login' id='Login' name='login' 
                            className='l-button-input' onClick={getData}/>
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