import React from 'react'
import SamathaImage from '../../assets/images/Samantha-Brown-Image.png'
import { Link } from 'react-router-dom'

function AboutCompany() {
  return (
    <>
    <section className="about-company">
        <div className="container">
            <div className="company-founder">
                <img src={SamathaImage} alt="A girl with a laptop in her hand."/>
                <div className="Samantha-Brown">
                    <div className="section-titel">
                        <h4>Samantha Brown,</h4>
                        <p>founder</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about-company-info">
                <div className="section-titel">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>
                <div className="btn">
                    <Link to="/contacts" className="btn-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                    <Link to="/" className="video-btn"><i className="fa-thin fa-circle-play"></i><p>Intro Video</p></Link>
                </div>          
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutCompany