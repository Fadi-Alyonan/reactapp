import React from 'react'

const ContactInfoBox = ({infoclass, icon, title, info1, info2}) => {
  return (
    <div>
        <div className={infoclass}>
            <i className={icon}></i>
            <div>
                <h5>{title}</h5>
                <p>{info1}</p>
                <p>{info2}</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfoBox