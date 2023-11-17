import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo-fotter.svg'
import linesFooter from '../assets/images/background-lines-footer.svg'


const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <img className="background-lines-fotter" src={linesFooter} alt=""/>
                <div className="footer-top">
                    <div className="logo-footer">
                        <Link to="/"><img  className="logo" src={logo} alt="crito logotype" /></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="footer-links">
                        <div className="company">
                            <h4>Company</h4>
                            <Link to="/">About</Link>
                            <Link to="/">Features</Link>
                            <Link to="/">Work</Link>
                            <Link to="/">Career</Link>
                        </div>
                        <div className="help">
                            <h4>Help</h4>
                            <Link to="/">Customer Support</Link>
                            <Link to="/">Delivery Details</Link>
                            <Link to="/">Terms & Conditions</Link>
                            <Link to="/">Privacy Policy</Link>
                        </div>
                        <div className="resources">
                            <h4>Resources</h4>
                            <Link to="/">Free eBooks</Link>
                            <Link to="/">Development Tutorial</Link>
                            <Link to="/">How to - Blog</Link>
                            <Link to="/">Youtube Playlist</Link>
                        </div>
                        <div className="link">
                            <h4>Link</h4>
                            <Link to="/">Free eBooks</Link>
                            <Link to="/">Development Tutorial</Link>
                            <Link to="/">How to - Blog</Link>
                            <Link to="/">Youtube Playlist</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                    <div className="social-media">
                        <Link to="/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="/" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                        <Link to="/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer