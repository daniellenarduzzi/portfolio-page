import './App.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {
  Component
} from 'react';
var FA = require('react-fontawesome')

class Footer extends Component {
  render() {
    return ( 
      < footer >
        < h6 > < FA name = "envelope" / > daniellenarduzzi@gmail.com   </h6>
        < h6 > < FA name = "linkedin" / > linkedin.com/in/daniellenarduzzi/ < /h6>
        < h6 > < FA name = "github" / > github.com/daniellenarduzzi < /h6>
      </footer>
    );
  }
}

export default Footer
