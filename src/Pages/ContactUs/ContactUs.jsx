import React from 'react'
import './ContactUs.css'
import ContactForm from '../../Components/ContactForm/ContactForm'

const ContactUs = () => {

  return (
    <>
      <div className="contactUs__title">
        <div className="contactUs__title-box">
          <h1 className="contactUs__title-text">Contacta con nosotros</h1>
        </div>
      </div>
      <div className='contactUs__content-box'>
        <ContactForm/>
      </div>
    </>
  )
}

export default ContactUs