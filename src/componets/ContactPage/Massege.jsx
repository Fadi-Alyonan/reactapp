import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

const Massege = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  const form = useFormik({
    initialValues:{
      name: '',
      email: '',
      message: ''
    },

    validationSchema: yup.object({
      name: yup.string() 
        .required('You must enter a name.')
        .matches(/^[a-zA-Z\s]{2,}$/, 'You must enter a name with a least two character.'),
      email: yup.string()
        .required('E-mail must be entered.')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid e-mail address'),
      message: yup.string() 
        .required('you must write a message.')
        .matches(/^[a-zA-Z\s]{2,}$/, 'you must write a message with a least two character.'),
    }),
    
    onSubmit: async (values, {resetForm}) => {
      const isValid = await form.validateForm(values)
  
      if (isValid) {
        
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.status === 200) {
          setSuccessMessage('Thank you for your message, we will contact you.')
          window.alert('The message has been sent.')
          setErrorMessage('');
          resetForm({
            values: {
              name: '',
              email: '',
              message: ''
            }
          });
          setMessageSent(true);
          
        } else {
          console.error('Something has failed the test once again.')
          setErrorMessage('Something has failed the test once again.')
        }
      } else {
        console.error('Validation error:', form.errors)
      }
    }
  })

  return (
    <>
    <section className="massege">
    <div className="container">
        <form className="Send-Massage-form" onSubmit={form.handleSubmit} noValidate>
            <label className="massege-info" htmlFor="name">Leave us a message for any information.</label>
            <p className='errorMassege'>{errorMessage}</p>
            <p className={`alert ${messageSent ? 'alert-success' : ''}`} role="alert">
              {messageSent ? successMessage : ''}
            </p>
            <label className='errorMassege'>{form.errors.name ? form.errors.name :'' }</label>
            <input className="name" id='name' value={form.values.name} onChange={form.handleChange} name="name" title="name" type="text" placeholder="Name*" tabIndex="1"/>
            <label className='errorMassege'>{form.errors.email ? form.errors.email :'' }</label>
            <input className="email" value={form.values.email} onChange={form.handleChange} name="email" title="email" type="email" placeholder="Email*" tabIndex="2"/>
            <label className='errorMassege'>{form.errors.message ? form.errors.message :'' }</label>
            <textarea className="your-massege" value={form.values.message} onChange={form.handleChange} name="message" id="your-massege" placeholder="Your Message*" cols="30" rows="10" tabIndex="3"></textarea>
            <button type="submit" className="btn-yellow" id="Send-Massage" title="Send-Massage">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
    </div>
</section>
</>
  )
}

export default Massege