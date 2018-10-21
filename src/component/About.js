import './App.css';
import './About.css';
import React, {
  Component
} from 'react'

class About extends Component {
  appearOnScroll() {
    var c
    if (this.props.top > this.props.height)
      c = 0 
    else 
      c = (this.props.width * (33 / 100) * this.props.top / this.props.height) - this.props.width * (33 / 100)
    return { left: c }
  }
  render() {
    return ( 
      <div className="about" id="about">
        <div className="poligone" id="eighth" style={this.appearOnScroll()}/>
          <div className="about-title">About Me</div>
        <div className="large-viewport-flex-container-text">
          < div className="about-body" >
          <div>
            I am Daniel Lenarduzzi from Rosario, Argentina. I am passionated about
            knowledge in general, and blockchain in particular, because of its 
            disruptive potential. I am blockchain & full-stack developer, with a 
            background in sciences, teaching and philosophy. I am actually working
            in Cryptologic, an Argentinian fintech startup. I am also studying to 
            get my degree as a System Engineer, and bachelor's degree in Philosophy,
            too.
          </div>
          </div>
        </div>
    </div>
    );
  }
}

export default About