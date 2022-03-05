import React from 'react';
import pic from '../public/images/login.jpg';
import Image from 'next/image'

const Contact = () => {
  return <>
      <section>
      <div className='c-container'>
          <div className='c-card-container'>
              <div className='c-card'>
                  <div className='c-card-image'>
                  <figure>
                      <Image src={pic} alt='contact-card' className='c-card-image-pic' />
                  </figure>
                  </div>
                  <div className='c-card-info'>
                    <div className='c-card-info-title'>
                      Phone
                    </div>
                    <div className='c-card-info-data'>
                      +91 9844465489
                    </div>
                  </div>
              </div>
              <div className='c-card'>
                  <div className='c-card-image'>
                  <figure>
                      <Image src={pic} alt='contact-card' className='c-card-image-pic' />
                  </figure>
                  </div>
                  <div className='c-card-info'>
                    <div className='c-card-info-title'>
                      Email
                    </div>
                    <div className='c-card-info-data'>
                      charan@workat.com
                    </div>
                  </div>
              </div>
              <div className='c-card'>
                  <div className='c-card-image'>
                    <figure>
                      <Image src={pic} alt='contact-card' className='c-card-image-pic' />
                    </figure>
                  </div>
                  <div className='c-card-info'>
                    <div className='c-card-info-title'>
                      Address
                    </div>
                    <div className='c-card-info-data'>
                      Bangalore,Karnataka.
                    </div>
                  </div>
              </div>
          </div>
          <div className='c-info-container'>
              <div className='c-info'>
                <div className='c-info-title'>
                    Get in Touch
                </div>
                <form className='c-info-form'>
                    <div className='c-info-data'>
                      <div className='c-info-data-attribute'>
                        <input type='text' placeholder='Your Name' required='true' className='c-form-input' />
                      </div>
                      <div className='c-info-data-attribute'>
                      <input type='email' placeholder='Your Email' required='true'  className='c-form-input'/>
                      </div>
                      <div className='c-info-data-attribute'>
                      <input type='number' placeholder='Your Phone' required='true'  className='c-form-input'/>
                      </div>
                    </div>
                    <div className='c-info-message-div'>
                      <textarea className='c-form-message' rows='10' cols='30' placeholder='Message'></textarea>
                    </div>
                    <div className='c-info-button'>
                        <button type='submit' className='c-contact-button' >Send Message</button>
                    </div>
                </form>
              </div>
          </div>
      </div>
    </section>
  </>;
};

export default Contact;
