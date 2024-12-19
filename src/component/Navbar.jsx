import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg "
  style={{backgroundColor:' #121254',
    padding:5, width:'100%',
 //   position:'fixed',
 //   top:'0px',
  
  }}>
  <div className="container">
    <a className="navbar-brand fs-3 fw-border" href="#" style={{
      fontWeight:'bolder',
      color:'white',
textTransform:'uppercase'
    }}>START BOOTSTRAP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-3 fw-bolder"
      style={{color:'white'}}
      >
        <li className="nav-item"
        >
          <Link className="nav-link active" aria-current="page" to={'/portfolio'}
      style={{color:'white'}}
      >PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/about'}
      style={{color:'white'}}
      >ABOUT</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to={'/contact'}
      style={{color:'white'}}
      >CONTACT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  );
}
