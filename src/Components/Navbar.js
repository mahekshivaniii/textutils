import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand ${props.mode}`} href="">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className={`navbar-toggler-icon ${props.mode}`} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link  ${props.mode}`} aria-current="page" href="">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link ${props.mode}`} to="./Services">{props.aboutText}</Link>
        </li> */}
        
      </ul>
      <div classname="form-check form-switch ">
        <input classname="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
        <label classname="form-check-label" className={`text-${props.mode === 'light' ? 'dark':'light'}`} forhtml="flexSwitchCheckChecked"> Enable Light mode</label>
      </div>
    </div>
  </div>
</nav>

  );
}

Navbar.prototype = {title : PropTypes.string.isRequired, 

aboutText : PropTypes.string
}

 

Navbar.defaultProps = {
    title : "Website",
    aboutText : "Contact US"
}
