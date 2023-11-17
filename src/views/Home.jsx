import React from 'react'
import Showcase from '../componets/HomePage/Showcase'
import Sponsors from '../componets/HomePage/Sponsors'
import Features from '../componets/HomePage/Features'
import AboutCompany from '../componets/HomePage/AboutCompany'
import OurServices from '../componets/HomePage/OurServices'
import WhyChooseUs from '../componets/HomePage/WhyChooseUs'
import ProjectAndCase from '../componets/HomePage/ProjectAndCase'
import MeetOurTeam from '../componets/HomePage/MeetOurTeam'
import Testimonial from '../componets/HomePage/Testimonial'
import ArticleNews from '../componets/HomePage/ArticleNews'
import Signup from '../componets/HomePage/Signup'


const Home = () => {
  return (
    <>
    <Showcase/>
    <Sponsors/>
    <Features/>
    <AboutCompany/>
    <OurServices/>
    <WhyChooseUs/>
    <ProjectAndCase/>
    <MeetOurTeam/>
    <Testimonial/>
    <ArticleNews/>
    <Signup/>
    </>
  )
}

export default Home