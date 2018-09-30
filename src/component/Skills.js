import './App.css';
import './Skills.css'
import React, {
  Component
} from 'react'
var FA = require('react-fontawesome')
class Skills extends Component {


  render() {
    return (
      <div className="skills" id="skills">
        <div className="skills-title">My toolbox</div>
        <p className="skills-body">
          <ul>
            <div className="skills-subtitle" > Blockchain </div>
            <li>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-o"/> 
              Solidity
            </li>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-o"/>
              Web3 
            </li>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-half-o"/>
              <FA name="star-o"/>
              Truffle 
            </li>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-half-o"/>
              <FA name="star-o"/>
              Parity 
            </li>
            <div className="skills-subtitle" > Backend </div>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-half-o"/>
              <FA name="star-o"/> 
              NodeJs 
            </li>
            
            <div className="skills-subtitle" > Frontend </div>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-o"/>
              <FA name="star-o"/> 
              React 
            </li>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-o"/>
              Jquery 
            </li>
            
            <div className="skills-subtitle" > Versioning </div>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-half-o"/>
              <FA name="star-o"/> Github </li>
            
            <div className="skills-subtitle" > Admin </div>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-o"/>
              <FA name="star-o"/>
              Linux Bash 
            </li>
            <li >
              <FA name="star"/>
              <FA name="star"/>
              <FA name="star-half-o"/>
              <FA name="star-o"/>
              <FA name="star-o"/>
              C 
            </li>
          </ul>
        </p>
        <img className="skills_photo" src="./images/skills_background.jpg"/>
      </div>
    );
  }
}

export default Skills
