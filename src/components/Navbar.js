import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <Link class="navbar-brand" to="/">{props.title}</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                    {//<link class="nav-link disabled" to="/">Disabled</link>
}</li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>            
        </div>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired ,
  }

  /* default Props value passes by default if no value is called in Navbar in App.js*/
Navbar.defaultProps = {
    title : "Default Title"               
}