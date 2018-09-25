import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
      width: 0,
      height: 0,
      top: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateScreenTop = this.updateScreenTop.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateScreenTop);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(this.state.height);
    
  }

  updateScreenTop() {
    this.setState({
      top: window.pageYOffset,
    });
  }

  render() {
    return (
      <div className="App flex flex-direction-column">
           < link href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
           rel = "stylesheet" / >
        <Header />
        < Main width = {
          this.state.width
        }
        height = {
          this.state.height
        }

        top = {
          this.state.top
        }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
