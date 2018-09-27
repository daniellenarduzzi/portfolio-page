import './App.css';
import './Projects.css';
import React, {
    Component
} from 'react'

class Projects extends Component {
  text1 ="I am actually working in an oracle system for ethereum main net and bitsign POA chain. This will work on a UI fully synced with metamask."
  text2="My last completed work was oriented to obtain know-how about Parity private transactions technology. At this point I obtained a solid background about the blockchain infrastructure."
  text3 = ""
  render() {
    return ( 
      < div className = "projects" id="projects" >
          <div className="container-large-projects">
            < div className = "projects-title" > Projects < /div>
            < p className = "projects-body" > {
              this.text1
            } < br / > My last completed work was oriented to obtain know - how about < a href = "https://wiki.parity.io/Private-Transactions.html" > Parity private transactions < /a> technology. At this point I obtained a solid background about the blockchain infrastructure. < br / > Take a look to < a target = "blank"
            href = "https://github.com/daniellenarduzzi" > my github page < /a>, and also one < a target="blank" href = "https://medium.com/cryptologic/memory-and-storage-in-solidity-4052c788ca86" > post that I wrote in Medium < /a>, to clarify the usage of memory and storage keywords in solidity. < /p >
         </div>
        < img className = "projects_photo" src = "./images/projects_background.jpg" / >
      < /div>
    );
  }
}

export default Projects
