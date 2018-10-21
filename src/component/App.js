import './App.css';
import './navbar.css';
import React, { Component } from 'react';
import Header from './Header'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
var FA = require('react-fontawesome')
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      top: 0,
      showNavbar: false,
      hideOnScroll: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateScreenTop = this.updateScreenTop.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateScreenTop);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  
  updateScreenTop() {
    this.setState({
      hideOnScroll: window.pageYOffset > this.state.top, 
      top: window.pageYOffset,
    });
  }

  toggleNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
  }

  moveImg(from, ratio) {
    let c
    if (this.state.top > this.state.height * (from - 2) && this.state.top < this.state.height * from)
      c = this.state.top / ratio
    else
      c = this.state.height*from / ratio
    console.log(c);
    
    return { top: c }
  }

  render() {

    return (
      <div className="App flex flex-direction-column">
        < Header height={this.state.height} 
                 top={this.state.top}
                 imgStyle = {this.moveImg(1 , 2)}
        />
        {
          (this.state.showNavbar || this.state.width > 600) &&
          this.state.top > this.state.height ?
            <navbar className="flex" 
                    className=
                    {
                      this.state.hideOnScroll && 
                      this.state.width > 600 ? 
                        "hideNavbar"                        
                      : "showNavbar"
                    }
            >
              <a href="#about"> About me </a>
              <a href="#projects"> Projects </a>
              <a href="#skills"> Skills </a>
              <a href="#education"> Education </a>
              <a href="#footer"> Contact me </a>
            </navbar>
          : null
        }
        {
          this.state.width < 600 &&
          this.state.top > this.state.height ?
            <button 
              onClick={this.toggleNavbar}
              className={
              this.state.top / this.state.height > 3.5 ?
                "changeColor menu" 
              : "menu"
              }
            >
              {this.state.showNavbar ?
                <FA name="close"/>
              : <FA name="bars"/>
              }
            </button>
          : null
        }
        <About  
          height={this.state.height}
          width={this.state.width}        
          top={this.state.top}
        />
        <Skills 
          height={this.state.height} 
          width={this.state.width}
          top={this.state.top}
        />
        <Projects 
          height={this.state.height}
          top={this.state.top}
        />
        <Education/>
        <Footer/>
      </div>
    );
  }
}

export default App
