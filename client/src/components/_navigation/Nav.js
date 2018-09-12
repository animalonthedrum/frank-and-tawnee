
import React from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';
import ToggleButton from './ToggleButton';


const Nav = props => (
    <div>
  <header className="toolbar">
  <nav className="toolbar__navigation">
      <div className="toolbar__logo"><NavLink to="/" exact>
      Frank + Tawnee
      </NavLink></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
          <ul>
            <li><Link activeClass="active" className="" to="whenWhere" spy={true} smooth={true} duration={500}>When + where</Link></li>   
            <li><Link activeClass="active" className="" to="detailsTravel" spy={true} smooth={true} duration={500} >Details + travel</Link></li>
            <li><Link activeClass="active" className="" to="ourStory" spy={true} smooth={true} duration={500}>Our Story</Link></li>
            <li><Link activeClass="active" className="" to="hisHers" spy={true} smooth={true} duration={500}>His & Hers</Link></li>
            <li><Link activeClass="active" className="" to="registry" spy={true} smooth={true} duration={500}>Registry</Link></li>   
            <li><NavLink to="/rsvp">RSVP</NavLink></li>
          
                              
          </ul>
      </div>
      <div className="toolbar__toggle-button">
          <ToggleButton click={props.navClickHandler} />
      </div>
  </nav>
   </header>
   </div>

);

export default Nav;