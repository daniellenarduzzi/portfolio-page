import './App.css';
import './Header.css';
import React, {
    Component
} from 'react';
class Header extends Component {
  render() {
    return ( 
      < header >
        < div className = "contain">
          <div className="profile-img-container">
            <img className="profile" src="./images/profile.jpg" />
          </div>
          <div class= "header-title">
          DANIEL LENARDUZZI
          <br/>
          Blockchain & Full-Stack Dev
          </div>
        </div>
        < img className = "background" src = "./images/header_background.jpg" / >
      </header>
    );
  }
}

export default Header
