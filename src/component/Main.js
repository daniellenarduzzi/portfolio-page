import './App.css';
import './Main.css';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {
    Component
} from 'react'
var FA = require('react-fontawesome')

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: "about",
      showNavbar: false,
    };
    // this.updateScreenTop = this.updateScreenTop.bind(this);
  }
  toggleNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
    this.changeShowing("navbar")
  }

  changeShowing = (where) =>{
    this.setState({
      showing: where,
    })
  }

  render() {
    return ( 
      < main className = "light-theme default-padding" >
      {
        (this.state.showNavbar || this.props.width > 600) && this.props.top > this.props.height ?
          < navbar className = "flex" >
            < button onClick={() => this.changeShowing("about")} > About me < /button> 
            < button onClick={() => this.changeShowing("skills")} > Skills < /button> 
            < button onClick={() => this.changeShowing("projects")} > Projects < /button> 
            < button onClick={() => this.changeShowing("education")} > Education < /button> 
            < button onClick={() => this.changeShowing("contact")} > Contact me < /button> 
          </navbar>   
        : null
      } 
      {
        this.props.width < 600 && this.props.top > this.props.height ?
          < button className = "menu"
          onClick = { this.toggleNavbar} >
            { this.state.showNavbar ?
              < FA name = "close" / >
            : < FA name = "bars" / >
            }
          < /button>
        : null
      }
      </main>
    );
  }
}

export default Main
