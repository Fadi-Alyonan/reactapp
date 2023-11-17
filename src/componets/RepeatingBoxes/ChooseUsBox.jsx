import React from 'react'

const ChooseUsBox = ({icon, title, description}) => {
  return (
    <div className="item">
        <i className={icon}></i>
        <div className="text">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChooseUsBox