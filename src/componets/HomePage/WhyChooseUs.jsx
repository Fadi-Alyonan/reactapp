import React from 'react'
import WhyChooseUsImage from '../../assets/images/Why-Choose-Us-Image.png'
import ChooseUsBox from '../RepeatingBoxes/ChooseUsBox'

function WhyChooseUs() {
  return (
    <>
    <section className="why-choose-us">
       <div className="why-choose-us-b-g-c"> </div>
        <div className="container">
            <div className="why-choose-us-info">
                    <div className="section-titel">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                <div className="why-choose-us-info-text">
                    <ChooseUsBox icon='fa-light fa-thumbs-up' title='Process Excellence' description='Lorem, ipsum dolor sit amet consectetur.'/>
                    <ChooseUsBox icon='fa-thin fa-bullseye-pointer' title='Strategic Planning' description='Lorem, ipsum dolor sit amet consectetur.'/>
                    <ChooseUsBox icon='fa-thin fa-wand-magic-sparkles' title='Experience Design' description='Lorem, ipsum dolor sit amet consectetur.'/>
                    <ChooseUsBox icon='fa-regular fa-head-side-gear' title='Artificial Inteligence' description='Lorem, ipsum dolor sit amet consectetur.'/>
                </div>
            </div>
            <div className="why-choose-us-img">
                <div><img src={WhyChooseUsImage} alt="Two girls sitting and discussing something."/></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyChooseUs