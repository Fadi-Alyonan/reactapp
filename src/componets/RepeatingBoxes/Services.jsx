import React from 'react'
import { Link } from 'react-router-dom'

const Services = ({title, description}) => {
  return (
    <div className="services">
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to="/" className="btn"><i className="fa-sharp fa-solid fa-arrow-right"></i></Link>
    </div>
  )
}

export default Services