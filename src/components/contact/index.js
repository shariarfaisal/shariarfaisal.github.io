import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'


function Contact(props) {
  return(
    <section id="contact" className="blue-grey lighten-5 py-4 bg-a">
      <div className="container">
        <div className="row mx-0">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  )
}
export default Contact
