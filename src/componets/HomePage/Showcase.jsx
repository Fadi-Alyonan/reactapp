import React from 'react'
import { Link } from 'react-router-dom'
import showCaseLines from '../../assets/images/background-lines-showcase.svg'
import showCaseImage from '../../assets/images/showcase-image.svg'

function Showcase() {
  return (
    <>
        <section className="showcase">
            <img className="background-lines-showcase" src={showCaseLines} alt=""/>
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Link to="/contacts" className="btn-yellow">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
                    <Link to="/" className="btn-transparent">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
                <img src={showCaseImage} alt="image of a man in a suit whit a tablet"/>
            </div>
        </section>
    </>
  )
}

export default Showcase