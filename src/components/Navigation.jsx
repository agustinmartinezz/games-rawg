import React from 'react'

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse d-flex justify-content-between">
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              HOME
            </a>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/games">Games</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation