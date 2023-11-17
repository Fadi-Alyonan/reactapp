import React from 'react'
import { Link } from 'react-router-dom'
import { Featur } from '../RepeatingBoxes/Featur'
function Features() {
  return (
    <>
    <section className="Features">
        <div className="container">
            <div className="section-titel">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Link to="/" className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="offers">
                <Featur icon="fa-light fa-handshake" titel="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <Featur icon="fa-regular fa-lightbulb-exclamation-on" titel="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <Featur icon="fa-light fa-chart-mixed-up-circle-dollar" titel="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                <Featur icon="fa-light fa-box-open-full" titel="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features