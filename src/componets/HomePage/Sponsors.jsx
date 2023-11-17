import React from 'react'
import sponsor1 from '../../assets/images/Logo-s-1.svg'
import sponsor2 from '../../assets/images/Logo-s-2.svg'
import sponsor3 from '../../assets/images/Logo-s-3.svg'
import sponsor4 from '../../assets/images/Logo-s-4.svg'
import sponsor5 from '../../assets/images/Logo-s-5.svg'

function Sponsors() {
  return (
    <>
        <section className="logo-sponsor">
            <div className="container">
                <img src={sponsor1} alt="Logo-s-1"/>
                <img src={sponsor2} alt="Logo-s-2"/>
                <img src={sponsor3} alt="Logo-s-3"/>
                <img src={sponsor4} alt="Logo-s-4"/>
                <img src={sponsor5} alt="Logo-s-5"/>
            </div>
        </section>
    </>
  )
}

export default Sponsors