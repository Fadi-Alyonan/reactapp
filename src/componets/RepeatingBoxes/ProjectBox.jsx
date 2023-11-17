import React from 'react'
import { Link } from 'react-router-dom'

const ProjectBox = ({img, imgAlt, title}) => {
  return (
    <Link to="/" className="article">
        <img src={img} alt={imgAlt}/>
        <h3>{title}</h3>
        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
    </Link>
  )
}

export default ProjectBox