import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import WhenWhere from './whenWhere';
import DetailsTravel from './detailsTravel';
import HomeHero from './homeHero';
import OurStory from './ourStory';
import HisHers from './hisHers';
import Registry from './registry';
import EUCL2 from './EUCL-2';
import OSPRX from './OSPRX';




export default class Scroll extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
     
    });

    Events.scrollEvent.register('end', function () {
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          <nav className="navbar">
            <div className="container">
                <ul className="nav">
                  <li><Link activeClass="active" className="slide slide1" to="homeHero" spy={true} smooth={true} duration={500} ></Link></li>
                  <li><Link activeClass="active" className="slide slide2" to="whenWhere" spy={true} smooth={true} duration={500}></Link></li>
                  <li><Link activeClass="active" className="slide slide3" to="detailsTravel" spy={true} smooth={true} duration={500} ></Link></li>
                  <li><Link activeClass="active" className="slide slide4" to="ourStory" spy={true} smooth={true} duration={500}></Link></li>
                  <li><Link activeClass="active" className="slide slide5" to="hisHers" spy={true} smooth={true} duration={500}></Link></li>
                  {/* <li><Link activeClass="active" className="registry" to="registry" spy={true} smooth={true} duration={500} delay={1000}>Registry( delay )</Link></li> */}
                  <li><Link activeClass="active" className="slide slide6" to="registry" spy={true} smooth={true} duration={500}></Link></li>
                  {/* <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
                  <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
                  <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
                  <li> <a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a></li>
                  <li> <a onClick={() => scroll.scrollMore(1000, { delay: 1500 })}>Scroll 1000 More! ( delay ) </a></li>
                  <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                  <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                  <li><a className="test1" to="test1" onClick={() => this.scrollTo()} >Scroll to element</a></li>
                  <li><a className="test1" to="test1" onClick={() => this.scrollToWithContainer()} >Scroll to element within container</a></li> */}
                </ul>
            </div>
          </nav>

          <Element name="homeHero" className="homeHero" style={{
            height: '100vh'
         
          }}>
           <HomeHero />
           {/* <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a> */}
           


        </Element>

          <Element name="whenWhere" className="element"style={{
            // position: 'relative',
            height: '100%'
          }}>
           <h1 className="title">When + Where</h1>
            <WhenWhere />
        </Element>

          <Element name="detailsTravel" className="element"style={{
            // position: 'relative',
            height: '100%',
            paddingTop:'70px'
          }}>
            <DetailsTravel />
        </Element>
        <Element name="ourStory" className="element ourStoryTitle"style={{
            // position: 'relative',
            height: '100%'
          }}>
          <EUCL2/>
          <OSPRX/>
     
          
           <OurStory />
        </Element>
          <Element name="hisHers" className="element"style={{
            // position: 'relative',
            height: '100%',
            paddingBottom:'45px'
          }}>
           <h1 className="title">His + Hers</h1>
           <HisHers />
      
        </Element>

          <Element name="registry" className="element"style={{
            // position: 'relative',
            height: '100%',
            paddingBottom:'100px'
            
          }}>
         <Registry />
         <div className="scroll-up-animation">    
          <a className='scrollUp' onClick={this.scrollToTop}>
         <span></span><span/><span/> Back to top
          </a>
         </div>
        
        </Element>

          {/* <div id="anchor" className="element">
            test 6 (anchor)
        </div>

          <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to first element inside container
        </Link>

          <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
            Go to second element inside container
        </Link>

          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>

            <Element name="firstInsideContainer" style={{
              marginBottom: '200px'
            }}>
              first element inside container
          </Element>

            <Element name="secondInsideContainer" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element>
          </Element>


          <Element id="same" className="element">
            Two links point to this
        </Element>


          <Element name="scroll-to-element" className="element">
            Scroll to element
        </Element>

          <Element className="element" id="scroll-container" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>

            <Element name="scroll-container-first-element" style={{
              marginBottom: '200px'
            }}>
              first element inside container
          </Element>

            <Element name="scroll-container-second-element" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element>
          </Element> */}

    
      </div>
    );
  }
};



