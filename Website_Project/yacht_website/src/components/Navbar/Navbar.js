import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { SvgIcon } from '@material-ui/core';

import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import Sailboat from '../../SVG-icons/Sailboat'
import './Navbar.css'

class Navbar extends Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  
  render()
  {
    return(
      <nav className='NavbarItems'>
        <Link to='/' className='navbar-logo-text'>
          Click&Sail <Sailboat className='navbar-logo'/>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>

          </i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })}
        </ul>

        {/* <Button>Test</Button> */}
      </nav>
    )
  }
};

export default Navbar;