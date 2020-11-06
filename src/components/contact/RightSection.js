import React from 'react'

function RightSection(props) {
  return(
    <div className="col-sm-6">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="text-dark" href="https://facebook.com/xfa1sal">
            <i className="bx text-primary bxl-facebook mx-1"></i>
            <span className="body">facebook.com/xfa1sal </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="text-dark" href="https://linkedin.com/in/shariarfaisal">
            <i className="bx text-primary bxl-linkedin mx-1"></i>
            <span className="body">linkedin.com/in/shariarfaisal</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="text-dark" href="https://twitter.com/cyberjuncky">
            <i className="bx text-primary bxl-twitter mx-1"></i>
            <span className="body"> twitter.com/cyberjuncky</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="text-dark" href="https://github.com/shariarfaisal">
            <i className="bx text-primary bxl-github mx-1"></i>
            <span className="body">github.com/shariarfaisal</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default RightSection
