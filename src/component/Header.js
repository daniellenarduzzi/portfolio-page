import './App.css';
import './Header.css';
import React, {
    Component
} from 'react';
class Header extends Component {
  render() {
    return ( 
      < header className = "dark-theme flex flex-column flex-cross-center flex-main-space-around" >
        <img className="profile" src="./images/profile.jpg"/>
        <h1>
          DANIEL LENARDUZZI

        </h1>
        <h2>
          Blockchain Dev
        </h2>
      </header>
    );
  }
}

export default Header
