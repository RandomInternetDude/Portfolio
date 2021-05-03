import React, {Component} from 'react';
import './Mission.css'
import Typing from 'react-typing-animation';
import ReactLoading from 'react-loading';
import Particles from 'react-particles-js';




const params = {
    "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": "#6495ED"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 5,
            "duration": 2,
            "opacity": 8,
            "speed": 1
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
}



export default class Mission extends Component {

    state = {
      done : undefined
    }

    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          done : true
        })
      },800)
    }


    render(){
        return(


          <div>
                  {!this.state.done ? (
               <ReactLoading className="center-load" type={"bars"} color={"white"} />
                 ) : (


                      <div className="cover-container" >
                        
                          <Particles className="particles" params={params} />
                          

                          <Typing speed={2} color='white' className='typewriter container' >
                              <div>
                                  <h1 className="">Heroes are remembered,</h1>
                                  <Typing.Delay ms={1000}/>
                                  <h2>But legends never die...</h2>
                              </div>
                          </Typing>
                          
                      </div>
                          
                


                 )}

          </div>


        )
    }
}