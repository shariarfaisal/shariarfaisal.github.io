import React from 'react'

function LeftSection(props) {
  return(
    <div className="col-sm-6">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="text-dark" href="mailto:faisaljr623@gmail.com">
            <i className="bx text-primary bxs-envelope mx-1"></i> <span className="body">faisaljr623@gmail.com</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="d-sm-none text-dark" href="tel:+8801822531439">
            <i className="bx text-primary bxs-phone mx-1"></i> <span className="body">+8801822531439</span>
          </a>
          <span className="d-none d-sm-block text-dark">
            <i className="bx text-primary bxs-phone mx-1"></i>
            <span className="body">+8801822531439</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="text-dark">
            <i className="bx text-primary bxs-location-plus mx-1"></i> <span className="body">Feni, Chattagram, Bangladesh</span>
          </span>
        </li>
        <li className="nav-item">
          <a className="text-dark" href="https://shariarfaisal.github.io">
            <i className="bx text-primary bx-link mx-1"></i> <span className="body">shariarfaisal.github.io</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default LeftSection
