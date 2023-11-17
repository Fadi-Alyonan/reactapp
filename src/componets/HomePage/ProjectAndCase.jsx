import React from 'react'
import { Link } from 'react-router-dom'
import articleImage1 from '../../assets/images/article-image-1.png'
import articleImage2 from '../../assets/images/article-image-2.png'
import articleImage3 from '../../assets/images/article-image-3.png'
import articleImage4 from '../../assets/images/article-image-4.png'
import ProjectBox from '../RepeatingBoxes/ProjectBox'

function ProjectAndCase() {
  return (
    <>
    <section className="project-and-case">
        <div className="container">
            <div className="section-titel">
                <p>Project & Case Studies</p>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="projecr-and-cases">
                <ProjectBox img={articleImage1} imgAlt='A mans hands reading a business paper' title='Grow your business'/>
                <ProjectBox img={articleImage2} imgAlt='Pink apple products on a desk' title='Why your client needs a responsive website'/>
                <ProjectBox img={articleImage3} imgAlt='Dest with office supplies' title='Educate your employees to get better results'/>
                <ProjectBox img={articleImage4} imgAlt='Laptop with business intelligence insights' title='Business Insights is a important piece of your business'/>
            </div>
            <div className="center-content"><Link to="/" className="btn-black">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></Link></div>
        </div>
    </section>
    </>
  )
}

export default ProjectAndCase