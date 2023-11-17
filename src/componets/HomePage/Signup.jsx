import React from 'react'
import signupLine from "../../assets/images/background-lines-singup.svg";


function Signup() {
  return (
    <>
    <section className="singup">
        <div className="container">
            <img className="background-lines-singup" src={signupLine} alt=""/>
            <label htmlFor="email">Get News Updates By Signup</label>
            <form className="singup-btn" method="get">
                <input id="email" title="email" type="email" placeholder="username@domain.com"/>
                <div> <button className="btn-yellow" type="submit" title="singup" id="singup">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button></div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Signup