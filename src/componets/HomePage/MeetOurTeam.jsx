import React from 'react'
import memberImage1 from '../../assets/images/team-members-Image-1.png'
import memberImage2 from '../../assets/images/team-members-Image-2.png'
import memberImage3 from '../../assets/images/team-members-Image-3.png'
import memberImage4 from '../../assets/images/team-members-Image-4.png'
import dot1 from '../../assets/images/dot-1.png'
import TeamMembers from '../RepeatingBoxes/TeamMembers'

function MeetOurTeam() {
  return (
    <>
        <section className="meet-our-team">
        <div className="container">
            <div className="section-titel">
                <div>
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="center-content"><a className="btn-black" href="#">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a></div>
            </div>
            <div className="team-members-img">
                <TeamMembers img={memberImage1} imgAlt='Kristine Palmer Chef Operation Officer' name='Kristine Palmer' position='Chef Operation Officer' />
                <TeamMembers img={memberImage2} imgAlt='Mark Aubri Senior Consultant' name='Mark Aubri' position='Senior Consultant' />
                <TeamMembers img={memberImage3} imgAlt='Kimberly Hansen Senior Consultant' name='Kimberly Hansen' position='Senior Consultant' />
                <TeamMembers img={memberImage4} imgAlt='Justin Willoman Senior Tech Consultant' name='Justin Willoman' position='Senior Tech Consultant' />
            </div>
            <img className="dot-1" src={dot1} alt="dot-1"/>
        </div>
    </section>
    </>
  )
}

export default MeetOurTeam