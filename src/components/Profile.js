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
            <p className="about-me">A tech enthusiast who is passionate at programming and love to write code, take challanges, solve problems and always curious to explore new things. I am a very optimistic and very open to hearing advice and experiences from anyone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile
