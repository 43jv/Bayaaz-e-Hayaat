import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom"
function Navigation() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
             
            <span className="sr-only">Toggle navigation</span> 
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
           Baayaz-e-Haayat 
          </a> 
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;