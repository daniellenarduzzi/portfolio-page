import './App.css';
import './About.css';
import React, {
  Component
} from 'react'

class About extends Component {
  appearOnScroll() {
    var c
    if (this.props.top < this.props.height * 33 / 100)
      c = this.props.height *33/100 
    else if (this.props.top < this.props.height && this.props.top >=  this.props.height*33/100)
      c = this.props.top
    return { top: c }
  }
  render() {
    return ( 
      <div className="about" id="about">
        <div className="poligone" id="sixth-cont" />
        <div className="poligone" id="seventh-cont" />
        <div className="poligone" id="eighth" style={this.appearOnScroll()}/>
          <div className="about-title">About Me</div>
        <div className="large-viewport-flex-container-text">
          < div className="about-body" >
            I am Daniel Lenarduzzi from Rosario, Argentina. I am passionated about
            knowledge in general, and blockchain in particular, because of its 
            disruptive potential. I am blockchain & full-stack developer, with a 
            background in sciences, teaching and philosophy. I am actually working
            in Cryptologic, an Argentinian fintech startup. I am also studying to 
            get my degree as a System Engineer, and bachelor's degree in Philosophy,
            too.
          </div>
        </div>
{/*        <div className = "large-viewport-flex-container-image">
          <img className = "about_photo" src = "./images/about_background.jpg"/>
        </div>
  */}    </div>
    );
  }
}

export default About