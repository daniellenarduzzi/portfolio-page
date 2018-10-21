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
            DANIEL LENARDUZZI
            <br/>
            Blockchain Dev
            <br />
            & Full-Stack
            <br />            
            <img className="profile" src="./images/profile.jpg"/>
          </div>
        </div>
        <div className = "poligone" 
              id="first"
        >
          <img  src="./images/header_background.jpg"
                style={this.fallDown()}
          />
        </div>
      </header>
    );
  }
}

export default Header
