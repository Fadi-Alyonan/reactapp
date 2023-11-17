import React from 'react'

const TeamMembers = ({img, imgAlt, name, position}) => {
  return (
    <div>
        <img src={img} alt={imgAlt}/>
        <h4>{name}</h4>
        <p>{position}</p>
    </div>
  )
}

export default TeamMembers