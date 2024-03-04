import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row text-center">
      <div className="col-md-4 mt-4">
        <span className="copyright quick-links">Copyright &copy; Your Website</span>
      </div>
      <div className="col-md-4 mt-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <Link to="#">
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
          </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4 mt-4">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <Link to="#">Privacy Policy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
