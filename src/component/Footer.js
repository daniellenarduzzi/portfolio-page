import './App.css';
import './Footer.css';
import React, {
  Component
} from 'react';
var FA = require('react-fontawesome')

class Footer extends Component {
  render() {
    return ( 
      <div className="footer" id="footer">
        <div className="footer-flex-container">
          <div className="footer-container">
            <p> I’ m always looking to meet new people and work on interesting stuff.
              <br/> 
              Send me an email at <a href = "mailto:daniellenarduzzi@gmail.com">
              daniellenarduzzi@gmail.com</a> and lets grab coffee or meet virtually! 
            </p>
            <a href = "mailto:daniellenarduzzi@gmail.com">
              <FA name = "envelope-square"/>
            </a>
            <a target = "blank" href = "https://www.linkedin.com/in/daniellenarduzzi/" >
              < FA name = "linkedin-square"/>
            </a>
            <a href = "https://github.com/daniellenarduzzi" target="blank">
              <FA name = "github-square"/>
            </a>
            <a href="https://medium.com/@daniellenarduzzi" target="blank">
              <FA name="medium" />
            </a>            
            <a href="https://t.me/daniellenarduzzi" target="blank">
              <FA name="telegram" />
            </a>                      
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
