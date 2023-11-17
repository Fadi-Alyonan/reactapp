import React from 'react'
import { Link } from 'react-router-dom'
import cassandraWarren from '../../assets/images/Cassandra-Warren-Image.png'
import amandaTulling from '../../assets/images/Amanda-Tulling-Image.png'
import jackMcdogglas from '../../assets/images/Jack-McDogglas-Image.png'
import ReviewBox from '../RepeatingBoxes/ReviewBox'

function Testimonial() {
  return (
    <>
    <section className="testimonial">
        <div className="container">
            <div className="section-titel">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="reviews">
                <ReviewBox review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                img={cassandraWarren} imgAlt='Cassandra Warren' name='Cassandra Warren' position='Business Manager, Dorfus' />
                <ReviewBox review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                img={amandaTulling} imgAlt='Amanda Tulling' name='Amanda Tulling' position='Senior Developer, Square' />
                <ReviewBox review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                img={jackMcdogglas} imgAlt='Jack McDogglas' name='Jack McDogglas' position='Key Account Manager, Gobona' />
                
            </div>
            <div className="testimonial-btn"><Link to="/" className="btn-black">All Reviews<i className="fa-regular fa-arrow-up-right"></i></Link></div>
        </div>
    </section>
    </>
  )
}

export default Testimonial