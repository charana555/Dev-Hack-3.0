import React from 'react'
import Image from 'next/image'
import pic from '../public/images/user.png'

const Hire = () => {
  return (
    <>
    <div className="hi-cards">
      <div className="hi-container">
        <div className="hi-left">
          <div className="hi-pic">
           <Image src = {pic} alt = "person pic"  />
           </div>
           <h3>Charan</h3>
           <p>Plumber</p>
        </div>
        <div className="hi-right">
           <span>Information</span>
           <hr />
           <div className='hi-info'>
             <div>
               <span>Email</span>
               <h5>my@gmail.com</h5>
             </div>
             <div>
               <span>Phone</span>
               <h5>9874563214</h5>
             </div>
             
             <div>
               <span>Gender</span>
               <h5>Male</h5>
             </div>
             <div>
               <span>Location</span>
               <h5>Bangalore</h5>
             </div>
           </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Hire