import React, { Component } from 'react'

class Nav extends Component {


  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#home">The Bias Bar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">All News<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#unbiased">Unbiased News</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#biasBin">Bias Bin</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#countries" id="countryDropdownMenuLink" aria-haspopup="true" aria-expanded="false">Countries</a>

                        <div className="dropdown-menu" aria-labelledby="countryDropdownMenuLink">
                            <a className="dropdown-item" href="#business">United States</a>
                            <a className="dropdown-item" href="#finance">Australia</a>
                            <a className="dropdown-item" href="#politics">United Kingdom</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#categories" id="categoryDropdownMenuLink" aria-haspopup="true" aria-expanded="false">Categories</a>

                        <div className="dropdown-menu" aria-labelledby="categoryDropdownMenuLink">
                            <a className="dropdown-item" href="#business">Business</a>
                            <a className="dropdown-item" href="#finance">Finance</a>
                            <a className="dropdown-item" href="#politics">Politics</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Nav
