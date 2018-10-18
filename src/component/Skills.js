import './App.css';
import './Skills.css'
import React, {
  Component
} from 'react'
var FA = require('react-fontawesome')
class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {

      carrouselItem: 0,
    };
  }
  componentDidMount = () => {
    this.moveCarrousel()
  }
  
  moveCarrousel(){
    let c = 1
    setInterval(() => {
      this.setState({
        carrouselItem: c % 4
      })
      c++
      console.log(this.state.carrouselItem);
    }, 5000);
  }
  carrouselStyle (){
    let c = (-100 * this.state.carrouselItem)+"%"
    return {left: c}
  }

  moveCarousel(add){
    let c = ( this.state.carrouselItem+add)%4;
    this.setState({
      carrouselItem: c
    })
  }

  moveImg(){
    if (this.props.top < this.props.height * 3 && this.props.top > this.props.height)
      var c = (25 *(this.props.top/this.props.height) - 75)+"vw"
    console.log(c);
    return {left: c}
  }

  render() {
    return (
      <div className="skills" id="skills">
        <div className="skills-title">My toolbox</div>
        <div class="arrow left" onClick={()=>this.moveCarousel(-1)}> </div>
        <div class="arrow right" onClick={() => this.moveCarousel(1)}> </div>
        <div className="carrousel-container" > 
          <div className="carrousel-content" style={this.carrouselStyle()}>
            <div className="carrousel-item" id="item-1">
              <div className="skills-subtitle" > Blockchain </div>
            </div>
            <div className="carrousel-item" id="item-2">
              <div className="skills-subtitle" > Backend </div>
            </div>
            <div className="carrousel-item" id="item-3">
              <div className="skills-subtitle" > Frontend </div>
            </div>
            <div className="carrousel-item" id="item-4">
              <div className="skills-subtitle" > Versioning </div>
            </div>
          </div>
        </div>
        <div className="skills_photo">
          <img  src="./images/skills_background.jpg"
                style={this.moveImg()}
          />
        </div>
      </div>
    );
  }
}

export default Skills
