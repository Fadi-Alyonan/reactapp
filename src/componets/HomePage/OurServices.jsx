import React from 'react'
import { Link } from 'react-router-dom'
import ServiceLines from '../../assets/images/background-lines-our-services.svg'
import Services from '../RepeatingBoxes/Services'

function OurServices() {
  return (
    <>
        <section className="our-service">
        <div className="background-lines-our-service">
            <img src={ServiceLines} alt=""/>
        </div>
        <div className="container">
            <div className="section-titel">
                <p>Our Services</p>
                <h2>We Provide The Best <br/>Service For Consulting</h2>
            </div>
            <div className="our-service-alt">
                <Services title='Business Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'/>
                <Services title='Startup Business' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'/>
                <Services title='Financial Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'/>
                <Services title='Risk Management' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'/>
            </div>  
            <div className="center-content"><Link to="/" className="btn-black">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link></div>
        </div>
    </section>
    </>
  )
}

export default OurServices