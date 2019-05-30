import React, { Component } from 'react'

import {Link} from 'react-router-dom';

import './Navbar.css';
import logo from '../ok.png';

 class Navbar extends Component {
  state = {
      isOpen:false,
     
  }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    closeNavbar = () => {
        this.setState({
            isOpen: false
        });
    };

   

 render() {
    return (
      
             <div>
             <nav>
                <div className="logoBtn">
                    <div className="logoDiv">
                        <Link to="/" className="logo"><img src={logo} alt="ok electric" className="logoIm" /></Link>
                    </div>
                    <button className={this.state.isOpen ? "animateBar" : "undefined"}
                        onClick={this.handleToggle}
                    >
                    <div className="btn" 
                     
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    </button>
                </div>

                <section className={this.state.isOpen ? "linksOpen" : "undefined"}>
                    <ul className="links">
                        <li>
                        <Link to="/" onClick={this.closeNavbar} className="a">
                                home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about"
                            onClick={this.closeNavbar}
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/" 
                            onClick={this.closeNavbar}
                            >
                                projects <span><i className="fas fa-angle-down"></i></span>
                            </Link>
                            <ul className="submenu">
                                <li className="first">
                                    <Link to="/electric"
                                    onClick={this.closeNavbar}
                                    >
                                        electrical
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/solar"
                                        onClick={this.closeNavbar}
                                    >
                                        photovoltaics
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/alarms"
                                        onClick={this.closeNavbar}
                                    >
                                        alarms
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <Link to="/contact"
                            onClick={this.closeNavbar}
                            >contact
                            </Link>
                        </li>

                    </ul>
                    </section>
                
            </nav> 







    </div>
    )
    }
}


export default Navbar;