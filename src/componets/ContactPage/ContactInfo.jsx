import React from 'react'
import ContactInfoBox from '../RepeatingBoxes/ContactInfoBox'
function ContactInfo() {
  return (
    <>
    <section className="contact-info">
        <div className="container">
            <ContactInfoBox infoclass='info-box' icon='fa-solid fa-location-plus fa-xl' title='visit us' info1='Sveavägen 31' info2='111 34 STOCKHOLM' />
            <ContactInfoBox infoclass='info-box' icon='fa-solid fa-circle-phone fa-xl' title='call us' info1='+46 (8) 121 470 50' info2='+46 (8) 121 470 51' />
            <ContactInfoBox infoclass='info-box' icon='fa-solid fa-circle-envelope fa-xl' title='Email us' info1='info@crito.com' info2='support@crito.com' />
        </div>
    </section>
    </>
  )
}

export default ContactInfo