import React from 'react'

function Profile(props) {
  return(
    <section id="profile" className="py-5">
      <div className="container">
        <div className="row mx-0">
          <div className="col-md-4 my-3 my-md-0 d-flex justify-content-center">
            <img id="profile-picture" className="rounded-circle" src="./img/profile.jpg" width="200px" height="200px" alt="Faisal" />
          </div>
          <div className="about col-md-8">
            <h1 className="name mt-0">Sharia Emon Faisal</h1>
            <p className="profession text-muted">Software Developer.</p>
            <p className="about-me">I'm enthusiastic. I was curious about hacking that led me to go with software development, this is my passion and I choosed it as my profession. I see life as an opportunity to make a change. I am a very optimistic person and always curious to learn new things. I am very open to hearing advice and experiences from you. Stay connected with me, cheers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile
