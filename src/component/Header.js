import './App.css';
import './Header.css';
import React, {
    Component
} from 'react';
class Header extends Component {
  fallDown() {
    var c= this.props.top/2
    return { top: c }
  }

  render() {
    console.log(this.props.imgStyle);
    
    return ( 
      <header>
        <div className = "contain">
          <div class= "header-title">
            <img className="profile" src="./images/profile.jpg"/>
            <br />            
            DANIEL LENARDUZZI
            <br/>
            Blockchain Dev
            <br />
            & Full-Stack
          </div>
        </div>
        <img  className = "poligone" 
              id="first" 
              src = "./images/header_background.jpg"
              style= {this.props.imgStyle}
        />
        <div className="poligone" id="second"  />
        <div className="poligone" id="third" />
        <div className="poligone" id="fourth" />
        <div className="poligone" id="fifth" />
        <div className="poligone" id="sixth" />
        <div className="poligone" id="seventh" />
      </header>
    );
  }
}

export default Header
