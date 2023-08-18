import React from 'react'
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="collapse navbar-collapse d-flex justify-content-between">
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              Home
            </a>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/games">Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://rawg.io/" target='_blank'>RAWG</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation