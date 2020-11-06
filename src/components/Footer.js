import React from 'react'

function Footer(props) {
  return(
    <section id="footer">
      <div className="footer-box py-3 border-top bg-light">
        <div className="container">
          <div className="row mx-0 text-center">
            <div className="col-sm-4 d-flex">
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#profile">Profile</a></li>
                <li className="nav-item"><a href="#social_links">Contact</a></li>
                <li className="nav-item"><a href="#experences">Experences</a></li>
              </ul>
            </div>
            <div className="col-sm-4 d-flex">
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="/gallery.html#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="col-sm-2 d-flex">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="https://facebook.com/xfa1sal">
                    <span><i className="bx bxl-facebook"></i></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://linkedin.com/in/shariarfaisal">
                    <span><i className="bx bxl-linkedin"></i></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/cyberjuncky">
                    <span><i className="bx bxl-twitter"></i></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/shariarfaisal">
                    <span><i className="bx bxl-github"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center blue-grey lighten-4 border-top py-2">
        <small style={{color: '#323639',fontWeight: '500',fontFamily: 'monospace',fontSize: '13px'}}><span className="d-none d-sm-inline-block">Sharia Emon Faisal |</span> shariarfaisal.github.io - 2020</small>
      </div>
    </section>
  )
}
export default Footer
