import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';
import heroVid from '../images/herovid.mp4';


export class HomeHero extends Component {
  render() {
    return (
    <Fragment>
    <div className="hero-container ">
    <video className='videoTag' playsInline autoPlay loop muted>
    <source src={heroVid} type='video/mp4' />
</video>
     <div className="homeTitle">
         <h1>Frank<br/> and <br/> Tawnee</h1>

         <p>SATURDAY, DECEMBER 01, 2018</p>
         <a href='/rsvp' className='link'>RSVP</a>
         <div className="scroll-down-animation">    
          <Link activeClass="active" className="scrollDown" to="whenWhere" spy={true} smooth={true} duration={500}>
          Scroll<span></span><span/><span/>
         </Link>
         </div>
     </div>
    </div>
  </Fragment>
    )
  }
}

export default HomeHero
