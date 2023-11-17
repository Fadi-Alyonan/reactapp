import React from 'react'

export const Featur = ({icon, title, description}) => {
  return (
    <div>
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
