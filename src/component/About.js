import './App.css';
import './About.css';
import React, {
  Component
} from 'react'

class About extends Component {
  text = " I am Daniel Lenarduzzi from Rosario, Argentina. I am passionated about knowledge in general, and blockchain in particular, because of its disrupt potential. I am blockchain & full-stack developer, with a background in sciences, teaching and philosophy. I am actually working in Cryptologic, an Argentinian fintech startup. I am also studying to get my degree as a System Engineer, and bachelor's degree in Philosophy, too. "
  render() {
    return ( 
      < div className="about" id="about" >
        <div className="large-viewport-flex-container-text">
          <div className="about-title">About Me</div>
          < p className="about-body" >{this.text}</p>
        </div>
        < div className = "large-viewport-flex-container-image" >
          < img className = "about_photo" src = "./images/about_background.jpg" / >
        </div>
      </div>
    );
  }
}

export default About