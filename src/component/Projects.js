import './App.css';
import './Projects.css';
import React, {
    Component
} from 'react'

class Projects extends Component {

  moveImg() {
    if (this.props.top < this.props.height * 4 && this.props.top > this.props.height*2)
      var c = (25 * (this.props.top / this.props.height) - 75) + "vw"
    console.log(c);
    return { right: c }
  }

  render() {
    let privateTxLink = "https://wiki.parity.io/Private-Transactions.html"
    let githubLink = "https://github.com/daniellenarduzzi"
    let mediumLink = "https://medium.com/cryptologic/memory-and-storage-in-solidity-4052c788ca86"
    return ( 
      <div className = "projects" id="projects">
          <div className="container-large-projects">
            <p className = "projects-body"> 
              I am actually working in an oracle system for ethereum main
              net and bitsign POA chain. This will work on a UI fully synced 
              with metamask.
              <br/>
              My last completed work was oriented to obtain know - how about
              <a href = {privateTxLink}> Parity private transactions </a>
              technology. At this point I obtained a solid background about the
              blockchain infrastructure. 
              <br/> 
              Take a look to 
              <a target = "blank" href = {githubLink}> my github page </a>, 
              and also one 
              < a target="blank" href = {mediumLink}> post that I wrote in Medium </a>,
              to clarify the usage of memory and storage keywords in solidity. 
            </p>
          </div>
        <div className="projects_photo" >
          <img src = "./images/projects_background.jpg"
               style={this.moveImg()}
          />
        </div>
      </div>
    );
  }
}

export default Projects
