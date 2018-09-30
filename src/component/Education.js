import './App.css';
import './Education.css';
import React, {
  Component
} from 'react'
var FA = require('react-fontawesome')
class Education extends Component {

  render() {
    return (
      <div className="education" id="education">
        <div className="education-title">Education</div>
        <p className="education-body">
          <ul>
            <li>IPS - Polytechnic Institute of Rosario | 2018 - act System analyst</li>
            <li>UNR - National University of Rosario| 2017-act Philosophy bachelor's degree</li>
            <li>UNR | 2012 - 2016 Biotechnology bachelor 's degree</li>
            <li>IPS - Polytechnic Institute of Rosario | 2005 - 2011 Secondary school</li>
          </ul>
        </p>
        <img className="education_photo" src="./images/education_background.jpg"/>
      </div>
    );
  }
}

export default Education