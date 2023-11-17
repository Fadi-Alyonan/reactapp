import React from 'react'
import PageNotFound from '../assets/images/PageNotFound.png'
const NotFaund = () => {
  return (
    <div className='container'>
      <img src={PageNotFound} alt="Page Not Found 404" className='page-not-found'/>
    </div>
  )
}

export default NotFaund