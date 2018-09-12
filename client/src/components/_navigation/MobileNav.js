
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';




const MobileNav = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
     <nav className={drawerClasses} onClick={props.click}>
     <div className='close' >
     {/* <div className="x"></div>
     <div className="x-"></div> */}
     </div>
      <ul>
            <li>
            <NavLink to="/" exact onClick={props.click}>Home</NavLink>
            </li>
            <li><Link activeClass="active" to="whenWhere" spy={true} smooth={true} duration={500} onClick={props.click}>When + where</Link></li>   
            <li><Link activeClass="active" to="detailsTravel" spy={true} smooth={true} duration={500} onClick={props.click} >Details + travel</Link></li>
            <li><Link activeClass="active" to="ourStory" spy={true} smooth={true} duration={500} onClick={props.click}>Our Story</Link></li>
            <li><Link activeClass="active" to="hisHers" spy={true} smooth={true} duration={500} onClick={props.click}>His & Hers</Link></li>
            <li><Link activeClass="active" to="registry" spy={true} smooth={true} duration={500} onClick={props.click}>Registry</Link></li>   
            <li>
            <NavLink className="link" to="/rsvp" onClick={props.click}>RSVP</NavLink>
            </li>
      </ul>
    </nav>
  );
};

export default MobileNav;