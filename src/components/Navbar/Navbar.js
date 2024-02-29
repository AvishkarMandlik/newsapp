import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light shadow bg-body rounded fixed-top" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b>NewsMonkey</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/general">general</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/science">science</Link></li>
                        <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                        <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                        <li><Link className="dropdown-item" to="/health">health</Link></li>
                        <li><Link className="dropdown-item" to="/business">business</Link></li>
                        
                      </ul>
                    </li>
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
